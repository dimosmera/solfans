//! program API

use borsh::{BorshDeserialize, BorshSerialize};

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
        membershipDetails: MembershipDetails,
    },
}

impl MembershipInstruction {
    pub fn getInstruction(instructionData: &[u8]) -> Result<Self, ProgramError> {
        if instructionData.len() == 0 {
            return Err(ProgramError::InvalidInstructionData);
        }

        let instructionType = instructionData[0];

        match instructionType {
            0 => {
                let mut membershipDetails = MembershipDetails::try_from_slice(&instructionData)?;

                return Self::StartMembership { membershipDetails };
            }
            _ => return Err(ProgramError::InvalidInstructionData),
        }
    }
}
