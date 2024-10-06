use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

pub static CONFIG_KEY: &[u8] = b"config";

use secret_toolkit::storage::Keymap;
pub static PRESCRIPTIONS: Keymap<i32, Prescription> = Keymap::new(b"prescriptions");

#[derive(Serialize, Deserialize, Clone, Debug, Eq, PartialEq, JsonSchema)]
pub struct Prescription {
    pub quantity: i32,
    pub num_of_prescriptions: i32,
    pub dosage: i32,
    pub type_of_medication: String,
}


