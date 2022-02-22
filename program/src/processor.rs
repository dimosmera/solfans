//! program logic

use solana_program::{account_info::AccountInfo, entrypoint::ProgramResult, msg, pubkey::Pubkey};

use crate::instruction::{MembershipDetails, MembershipInstruction};

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

        Ok(())
    }
}
