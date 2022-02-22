//! program logic

use solana_program::{account_info::AccountInfo, entrypoint::ProgramResult, msg, pubkey::Pubkey};

use crate::instruction::{MembershipDetails, MembershipInstruction};

pub struct Processor;

impl Processor {
    pub fn processInstruction(
        programId: &Pubkey,
        accounts: &[AccountInfo],
        instructionData: &[u8],
    ) -> ProgramResult {
        let instruction = MembershipInstruction::getInstruction(instructionData)?;

        match instruction {
            MembershipInstruction::StartMembership { membershipDetails } => {
                Self::processStartMembership(programId, accounts, membershipDetails)
            }
        }
    }

    fn processStartMembership(
        programId: &Pubkey,
        accounts: &[AccountInfo],
        membershipDetails: MembershipDetails,
    ) -> ProgramResult {
        msg!(
            "StartMembership ix with amount of {} and months of {}",
            membershipDetails.amount,
            membershipDetails.months
        );

        Ok(())
    }
}
