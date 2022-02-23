//! state of the program

use borsh::{BorshDeserialize, BorshSerialize};

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct MembershipDetails {
    // The total amount of SOL a Fan is committing
    pub amount: u32,
    // The duration of the Membership in months
    pub months: u16,
    // The bump seed for the new PDA Solfans account
    pub pda_bump: u8,
}
