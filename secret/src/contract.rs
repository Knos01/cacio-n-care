use cosmwasm_std::{
    entry_point, to_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdError, StdResult,
};

use crate::msg::{ ExecuteMsg, InstantiateMsg, QueryMsg, PrescriptionResponse};
use crate::state::{ PRESCRIPTIONS, Prescription};

#[entry_point]
pub fn instantiate(
    _deps: DepsMut,
    _env: Env,
    _info: MessageInfo,
    _msg: InstantiateMsg,
) -> StdResult<Response> {
    Ok(Response::default())
}

#[entry_point]
pub fn execute(deps: DepsMut, env: Env, _info: MessageInfo, msg: ExecuteMsg) -> StdResult<Response> {
    match msg {
        ExecuteMsg::StorePrescription { quantity, num_of_prescriptions, dosage, type_of_medication, index } => {
            try_store_prescription(deps, env, quantity, num_of_prescriptions, dosage, type_of_medication, index)
        },
    }
}

pub fn try_store_prescription(
    deps: DepsMut,
    _env: Env,
    quantity: i32,
    num_of_prescriptions: i32,
    dosage: i32,
    type_of_medication: String,
    index: i32
) -> StdResult<Response> {
    let prescription = Prescription {
        quantity,
        num_of_prescriptions,
        dosage,
        type_of_medication,
    };
    
    PRESCRIPTIONS.insert(deps.storage, &index, &prescription)?;

    Ok(Response::default())
}

#[entry_point]
pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {
        QueryMsg::GetPrescription { index } => to_binary(&query_prescription(deps, index)?),
    }
}

fn query_prescription(deps: Deps, index: i32) -> StdResult<PrescriptionResponse> {
    let prescription_exists = PRESCRIPTIONS.get(deps.storage, &index);

    match prescription_exists {
        Some(prescription) => Ok(PrescriptionResponse {
            prescription,
        }),
        None => Err(StdError::generic_err("no prescription at this index!")),
    }
}
