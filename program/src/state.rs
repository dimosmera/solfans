//! state of the program

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::pubkey::Pubkey;

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct MembershipDetails {
    // Used to determine if a given account is already in use
    pub is_initialized: u8,
    pub initializer_pubkey: Pubkey,
    // The total amount of SOL a Fan is committing
    pub amount: u32,
    // The duration of the Membership in months
    pub months: u16,
    // The bump seed for the new PDA Solfans account
    pub pda_bump: u8,
}
