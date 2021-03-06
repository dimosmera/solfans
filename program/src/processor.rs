//! program logic

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    clock::Clock,
    entrypoint::ProgramResult,
    msg,
    program::{invoke, invoke_signed},
    program_error::ProgramError,
    pubkey::Pubkey,
    rent::Rent,
    system_instruction,
    system_program::ID as SYSTEM_PROGRAM_ID,
    sysvar::Sysvar,
};
use std::mem;

use crate::error::SolfansError;
use crate::props::{StartMembershipProps, WithdrawProps};
use crate::state::MembershipDetails;

pub struct Processor;

impl Processor {
    pub fn process_instruction(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        instruction_data: &[u8],
    ) -> ProgramResult {
        if instruction_data.len() == 0 {
            return Err(ProgramError::InvalidInstructionData);
        }

        let (instruction_type, data) = instruction_data
            .split_first()
            .ok_or(ProgramError::InvalidInstructionData)?;

        match instruction_type {
            0 => {
                return Self::process_start_membership(
                    program_id,
                    accounts,
                    StartMembershipProps::try_from_slice(data)?,
                )
            }
            1 => {
                return Self::process_withdraw(
                    program_id,
                    accounts,
                    WithdrawProps::try_from_slice(data)?,
                )
            }
            _ => return Err(ProgramError::InvalidInstructionData),
        }
    }

    /**
     * Initiates a new Membership from a fan to a creator
     *
     * Accounts expected:
     * 0. `[signer]` The account of the fan initializing the Membership
     * 1. `[]` The account of the creator who will receive the funds. No funds are transferred to the creator in this transaction
     * 2. `[writable]` The Solfans PDA account funds will be transferred to. It will also hold all the necessary info about the transaction
     * 3. `[]` The System Program account
     */
    fn process_start_membership(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        props: StartMembershipProps,
    ) -> ProgramResult {
        // Get all accounts
        let account_info_iter = &mut accounts.iter();

        let fan_account = next_account_info(account_info_iter)?;
        let creator_account = next_account_info(account_info_iter)?;
        let solfans_state_account = next_account_info(account_info_iter)?;
        let system_program = next_account_info(account_info_iter)?;

        // Make sure the fan is the signer
        if !fan_account.is_signer {
            return Err(ProgramError::MissingRequiredSignature);
        }

        // Make sure the state account is writable
        if !solfans_state_account.is_writable {
            return Err(ProgramError::InvalidAccountData);
        }

        // Make sure the system program passed is valid
        if system_program.key.ne(&SYSTEM_PROGRAM_ID) {
            return Err(ProgramError::IncorrectProgramId);
        }

        // Make sure the passed PDA and expected PDA are equal
        let signers_seeds: &[&[u8]; 3] = &[
            b"solfansseeds",
            &fan_account.key.to_bytes(),
            &[props.pda_bump],
        ];
        let pda = Pubkey::create_program_address(signers_seeds, program_id)?;
        if pda.ne(&solfans_state_account.key) {
            return Err(SolfansError::InvalidPassedPDA.into());
        }

        // Make sure dates sent are correct
        if props.membership_end_time <= props.membership_start_time
            || props.membership_start_time < Clock::get()?.unix_timestamp
        {
            return Err(SolfansError::InvalidStartOrEndTime.into());
        }

        // Find out how many lamports the state account needs in order to be rent exempt
        const ACCOUNT_DATA_LEN: usize = mem::size_of::<MembershipDetails>();
        let lamports_required_for_pda_creation = Rent::get()?.minimum_balance(ACCOUNT_DATA_LEN);

        // Make sure the fan has enough lamports to pay for the 2 instructions
        let lamports_to_transfer_to_pda = u64::from(props.amount);
        if **fan_account.try_borrow_lamports()?
            < (lamports_to_transfer_to_pda + lamports_required_for_pda_creation)
        {
            return Err(SolfansError::InsufficientFundsForTransaction.into());
        }

        // Create the Program Derived Address account
        let create_pda_account_ix = system_instruction::create_account(
            &fan_account.key,
            &solfans_state_account.key,
            lamports_required_for_pda_creation,
            ACCOUNT_DATA_LEN.try_into().unwrap(),
            &program_id,
        );
        invoke_signed(
            &create_pda_account_ix,
            &[
                fan_account.clone(),
                solfans_state_account.clone(),
                system_program.clone(),
            ],
            &[signers_seeds],
        )?;

        // Make sure the state account's owner is the current program
        if solfans_state_account.owner.ne(&program_id) {
            return Err(ProgramError::IllegalOwner);
        }

        // Make sure the state account is rent exempt
        let rent = Rent::get()?;
        if !rent.is_exempt(
            solfans_state_account.lamports(),
            solfans_state_account.data_len(),
        ) {
            return Err(ProgramError::AccountNotRentExempt);
        }

        let pda_account_state =
            MembershipDetails::try_from_slice(&solfans_state_account.data.borrow())?;

        // Make sure the state hasn't been initialized already
        if pda_account_state.is_initialized.ne(&0) {
            return Err(ProgramError::AccountAlreadyInitialized);
        }

        let new_state = MembershipDetails::new(props, *fan_account.key, *creator_account.key);

        new_state.serialize(&mut &mut solfans_state_account.data.borrow_mut()[..])?;

        // Transfer SOL from fan to pda acount
        invoke(
            &system_instruction::transfer(
                fan_account.key,
                solfans_state_account.key,
                lamports_to_transfer_to_pda,
            ),
            &[
                fan_account.clone(),
                solfans_state_account.clone(),
                system_program.clone(),
            ],
        )?;

        msg!("nice :)");

        Ok(())
    }

    /**
     * Allows a creator to withdraw funds they are allowed to
     *
     * Accounts expected:
     * 0. `[signer]` The account of the creator who will receive the funds
     * 2. `[writable]` The Solfans PDA account that holds the funds
     * 3. `[]` The System Program account
     */
    fn process_withdraw(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        _props: WithdrawProps, // TODO: if we dont need these, delete them
    ) -> ProgramResult {
        // Get all accounts
        let account_info_iter = &mut accounts.iter();

        let creator_account = next_account_info(account_info_iter)?;
        let solfans_state_account = next_account_info(account_info_iter)?;
        let system_program = next_account_info(account_info_iter)?;

        // Make sure the creator is the signer
        if !creator_account.is_signer {
            return Err(ProgramError::MissingRequiredSignature);
        }

        // Make sure the state account is writable
        if !solfans_state_account.is_writable {
            return Err(ProgramError::InvalidAccountData);
        }

        // Make sure the state account's owner is the current program
        if solfans_state_account.owner.ne(&program_id) {
            return Err(ProgramError::IllegalOwner);
        }

        // Make sure the system program passed is valid
        if system_program.key.ne(&SYSTEM_PROGRAM_ID) {
            return Err(ProgramError::IncorrectProgramId);
        }

        let mut escrow_data =
            MembershipDetails::try_from_slice(&solfans_state_account.data.borrow())?;

        // Make sure the state has been initialized already
        if escrow_data.is_initialized.ne(&1) {
            return Err(SolfansError::AccountNotInitialized.into());
        }

        // Make sure the creator who is trying to claim is who we expect
        if *creator_account.key != escrow_data.creator_pubkey {
            return Err(ProgramError::IllegalOwner);
        }

        let time_now = Clock::get()?.unix_timestamp;

        let sol_per_month = u32::from(escrow_data.months) / escrow_data.amount;

        let funds_creator_can_withdraw = u64::from(sol_per_month)
            * ((std::cmp::min(time_now, escrow_data.membership_end_time)
                - escrow_data.membership_start_time) as u64)
            - escrow_data.funds_claimed_so_far;

        msg!("funds_creator_can_withdraw: {}", funds_creator_can_withdraw);

        // Make sure the account has enough to give
        if **solfans_state_account.try_borrow_lamports()? < funds_creator_can_withdraw {
            return Err(SolfansError::InsufficientFundsForTransaction.into());
        }

        escrow_data.funds_claimed_so_far += funds_creator_can_withdraw;
        escrow_data.serialize(&mut &mut solfans_state_account.data.borrow_mut()[..])?;

        // Transfer SOL from pda account to creator
        invoke(
            &system_instruction::transfer(
                solfans_state_account.key,
                creator_account.key,
                funds_creator_can_withdraw,
            ),
            &[
                solfans_state_account.clone(),
                creator_account.clone(),
                system_program.clone(),
            ],
        )?;

        msg!("nice :)");

        Ok(())
    }
}
