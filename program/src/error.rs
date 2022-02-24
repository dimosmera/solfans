//! program specific errors

use solana_program::program_error::ProgramError;
use thiserror::Error;

#[derive(Error, Debug, Copy, Clone)]
pub enum SolfansError {
    #[error("Invalid Passed PDA")]
    InvalidPassedPDA,
}

impl From<SolfansError> for ProgramError {
    fn from(e: SolfansError) -> Self {
        ProgramError::Custom(e as u32)
    }
}
