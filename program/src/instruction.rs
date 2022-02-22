//! program API

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::program_error::ProgramError;

use crate::error::SolfansError::InvalidInstruction;

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct MembershipDetails {
    // The total amount of SOL a Fan is committing
    pub amount: u32,
    // The duration of the Membership in months
    pub months: u16,
}

pub enum MembershipInstruction {
    /**
     * Initiates a new Membership from a Fan to a Creator
     *
     * Accounts expected:
     * 0. `[signer]` The account of the Fan initializing the Membership
     * 1. `[]` The account of the Creator who will receive the funds. No funds are transferred to the Creator in this transaction
     * 2. `[writable]` The Solfans data account funds will be transferred to. It will also hold all the necessary info about the transaction
     */
    StartMembership {
        membership_details: MembershipDetails,
    },
}

impl MembershipInstruction {
    pub fn get_instruction(instruction_data: &[u8]) -> Result<Self, ProgramError> {
        if instruction_data.len() == 0 {
            return Err(InvalidInstruction.into());
        }

        let instruction_type = instruction_data[0];

        Ok(match instruction_type {
            0 => Self::StartMembership {
                membership_details: MembershipDetails::try_from_slice(&instruction_data)?,
            },
            _ => return Err(InvalidInstruction.into()),
        })
    }
}
