//! program specific errors

use solana_program::program_error::ProgramError;
use thiserror::Error;

#[derive(Error, Debug, Copy, Clone)]
pub enum SolfansError {
    #[error("Invalid Passed PDA")]
    InvalidPassedPDA,
    #[error("Insufficient Funds For Transaction")]
    InsufficientFundsForTransaction,
    #[error("Account Not Initialized")]
    AccountNotInitialized,
    #[error("Invalid Start Or End Time")]
    InvalidStartOrEndTime,
}

impl From<SolfansError> for ProgramError {
    fn from(e: SolfansError) -> Self {
        ProgramError::Custom(e as u32)
    }
}
