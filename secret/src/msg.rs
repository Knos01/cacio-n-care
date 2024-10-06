use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use crate::state::Prescription;

#[derive(Serialize, Deserialize, Clone, Debug, Eq, PartialEq, JsonSchema)]
pub struct InstantiateMsg {
  
}

#[derive(Serialize, Deserialize, Clone, Debug, Eq, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {

    StorePrescription { quantity: i32, num_of_prescriptions: i32, dosage: i32, type_of_medication: String, index: i32 },
 
}

#[derive(Serialize, Deserialize, Clone, Debug, Eq, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
   
    GetPrescription {index: i32},
}

// We define a custom struct for each query response
#[derive(Serialize, Deserialize, Clone, Debug, Eq, PartialEq, JsonSchema)]
pub struct PrescriptionResponse {
    pub prescription: Prescription,
}

