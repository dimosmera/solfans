//! program API. Deserializes instruction_data and figures out the ix type

use borsh::BorshDeserialize;
use solana_program::program_error::ProgramError;

use crate::state::MembershipDetails;

pub enum MembershipInstruction {
    /**
     * Initiates a new Membership from a Fan to a Creator
     *
     * Accounts expected:
     * 0. `[signer]` The account of the Fan initializing the Membership
     * 1. `[]` The account of the Creator who will receive the funds. No funds are transferred to the Creator in this transaction
     * 2. `[writable]` The Solfans PDA account funds will be transferred to. It will also hold all the necessary info about the transaction
     */
    StartMembership {
        membership_details: MembershipDetails,
    },
}

impl MembershipInstruction {
    pub fn get_instruction(instruction_data: &[u8]) -> Result<Self, ProgramError> {
        if instruction_data.len() == 0 {
            return Err(ProgramError::InvalidInstructionData);
        }

        let instruction_type = instruction_data[0];

        Ok(match instruction_type {
            0 => Self::StartMembership {
                membership_details: MembershipDetails::try_from_slice(&instruction_data)?,
            },
            _ => return Err(ProgramError::InvalidInstructionData),
        })
    }
}
