// get data of user
export function getUserDataRequest() {
  return {
    type: '@main/GET_USER_DATA_REQUEST',
    payload: {},
  };
}

export function getUserDataSuccess(userData) {
  return {
    type: '@main/GET_USER_DATA_SUCCESS',
    payload: {userData},
  };
}

export function getUserDataError() {
  return {
    type: '@main/GET_USER_DATA_ERROR',
    payload: {},
  };
}

// Pay debt
export function payDebtRequest(scoreValue, id) {
  return {
    type: '@main/PAY_DEBT_REQUEST',
    payload: {scoreValue, id},
  };
}

export function payDebtSuccess(
  newScoreValue,
  id,
  scoreDescription,
  scoreLevel
) {
  return {
    type: '@main/PAY_DEBT_SUCCESS',
    payload: {newScoreValue, id, scoreDescription, scoreLevel},
  };
}

export function payDebtError() {
  return {
    type: '@main/PAY_DEBT_ERROR',
    payload: {},
  };
}

// Accept credit
export function acceptCreditRequest(scoreValue) {
  return {
    type: '@main/ACCEPT_CREDIT_REQUEST',
    payload: {scoreValue},
  };
}

export function acceptCreditSuccess(newScoreValue) {
  return {
    type: '@main/ACCEPT_CREDIT_SUCCESS',
    payload: {newScoreValue},
  };
}

export function acceptCreditError() {
  return {
    type: '@main/ACCEPT_CREDIT_ERROR',
    payload: {},
  };
}
