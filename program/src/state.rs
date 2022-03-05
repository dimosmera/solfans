//! state of the program

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::pubkey::Pubkey;

use crate::props::StartMembershipProps;

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct MembershipDetails {
    // Used to determine if a given account is already in use
    pub is_initialized: u8,

    pub fan_pubkey: Pubkey,

    pub creator_pubkey: Pubkey,

    pub membership_start_time: i64,

    pub membership_end_time: i64,

    // The total amount of SOL a Fan is committing
    pub amount: u32,

    // The duration of the Membership in months
    pub months: u16,

    // The bump seed used to create the state account
    pub pda_bump: u8,

    pub funds_claimed_so_far: u64,
}

impl MembershipDetails {
    pub fn new(data: StartMembershipProps, fan: Pubkey, creator: Pubkey) -> Self {
        MembershipDetails {
            is_initialized: 1,
            amount: data.amount,
            months: data.months,
            // Note: not sure if we need to store that. We could set it to 0
            pda_bump: data.pda_bump,
            membership_start_time: data.membership_start_time,
            membership_end_time: data.membership_end_time,
            fan_pubkey: fan,
            creator_pubkey: creator,
            funds_claimed_so_far: 0,
        }
    }
}
