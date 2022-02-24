//! state of the program

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::pubkey::Pubkey;

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct MembershipDetails {
    // Used to determine if a given account is already in use
    pub is_initialized: u8,

    pub fun_pubkey: Pubkey,

    pub creator_pubkey: Pubkey,

    pub membership_start: i64,

    // The total amount of SOL a Fan is committing
    pub amount: u32,

    // The duration of the Membership in months
    pub months: u16,

    pub pda_bump: u8,
}
