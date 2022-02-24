//! props passed to the program

use borsh::{BorshDeserialize, BorshSerialize};

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct StartMembershipProps {
    // The total amount of SOL a fan is committing
    pub amount: u32,

    // The duration of the Membership in months
    pub months: u16,

    // The bump seed for the new PDA Solfans account
    pub pda_bump: u8,
}
