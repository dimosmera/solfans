//! program logic

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint::ProgramResult,
    msg,
    program::invoke_signed,
    program_error::ProgramError,
    pubkey::Pubkey,
    rent::Rent,
    system_instruction,
    sysvar::Sysvar,
};
use std::mem;

use crate::error::SolfansError::NotRentExempt;
use crate::instruction::MembershipInstruction;
use crate::state::MembershipDetails;

pub struct Processor;

impl Processor {
    pub fn process_instruction(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        instruction_data: &[u8],
    ) -> ProgramResult {
        let instruction = MembershipInstruction::get_instruction(instruction_data)?;

        match instruction {
            MembershipInstruction::StartMembership { membership_details } => {
                Self::process_start_membership(program_id, accounts, membership_details)
            }
        }
    }

    fn process_start_membership(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        membership_details: MembershipDetails,
    ) -> ProgramResult {
        msg!(
            "StartMembership ix with amount of {} and months of {}",
            membership_details.amount,
            membership_details.months
        );

        let account_info_iter = &mut accounts.iter();

        let fan_account = next_account_info(account_info_iter)?;
        // let creator_account = next_account_info(account_info_iter)?;
        let solfans_account = next_account_info(account_info_iter)?;

        if !fan_account.is_signer {
            return Err(ProgramError::MissingRequiredSignature);
        }

        // Check if passed PDA and expected PDA are equal
        let signers_seeds: &[&[u8]; 3] = &[
            b"solfansseeds",
            &fan_account.key.to_bytes(),
            &[membership_details.pda_bump],
        ];
        let pda = Pubkey::create_program_address(signers_seeds, program_id)?;
        if pda.ne(&solfans_account.key) {
            return Err(ProgramError::InvalidAccountData);
        }

        let rent = Rent::get()?;
        const ACCOUNT_DATA_LEN: usize = mem::size_of::<MembershipDetails>();

        if !rent.is_exempt(solfans_account.lamports(), ACCOUNT_DATA_LEN) {
            return Err(NotRentExempt.into());
        }

        // set state to the pda
        // security checks
        // test it

        let lamports_required = Rent::get()?.minimum_balance(ACCOUNT_DATA_LEN);
        let create_pda_account_ix = system_instruction::create_account(
            &fan_account.key,
            &solfans_account.key,
            lamports_required,
            ACCOUNT_DATA_LEN.try_into().unwrap(),
            &program_id,
        );
        invoke_signed(
            &create_pda_account_ix,
            &[fan_account.clone(), solfans_account.clone()],
            &[signers_seeds],
        )?;

        // Setting state for PDA
        let mut pda_account_state =
            MembershipDetails::try_from_slice(&solfans_account.data.borrow())?;
        pda_account_state.amount = membership_details.amount;
        pda_account_state.months = membership_details.months;
        pda_account_state.serialize(&mut &mut solfans_account.data.borrow_mut()[..])?;
        // TODO: Set all required state, timeframe, pubKey addresses, etc
        // TODO: Transfer SOL from signer to solfans

        Ok(())
    }
}
