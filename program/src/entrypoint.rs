//! entrypoint to the program

use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey,
};

entrypoint!(process_instruction);
fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    msg!(
        "process_instruction: {}: {} accounts, data={:?}",
        program_id,
        accounts.len(),
        instruction_data
    );
    Ok(())
}

// -> support ix
// Check if user signed
// fans public address must equal wallets address
// Create new account, transfer all sol there alongside the required metadata
// required metadata is: total sol, streamers public address, fans public address, timeframes
// make sure it's sol that';'s being transferred

// -> claim ix
// Public address of wallet must equal the public address from the accounts metadata
// Find data accounts that have receiver address === wallets public address
// need to make sure the tx is signed and noone can just an address and just receive