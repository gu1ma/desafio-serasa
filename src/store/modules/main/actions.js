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
  scoreLevel,
  creditData,
  protectionPlainData
) {
  return {
    type: '@main/PAY_DEBT_SUCCESS',
    payload: {
      newScoreValue,
      id,
      scoreDescription,
      scoreLevel,
      creditData,
      protectionPlainData,
    },
  };
}

export function payDebtError() {
  return {
    type: '@main/PAY_DEBT_ERROR',
    payload: {},
  };
}

// Accept credit
export function acceptCreditRequest(scoreValue, id) {
  return {
    type: '@main/ACCEPT_CREDIT_REQUEST',
    payload: {scoreValue, id},
  };
}

export function acceptCreditSuccess(
  newScoreValue,
  id,
  scoreDescription,
  scoreLevel,
  protectionPlainData
) {
  return {
    type: '@main/ACCEPT_CREDIT_SUCCESS',
    payload: {
      newScoreValue,
      id,
      scoreDescription,
      scoreLevel,
      protectionPlainData,
    },
  };
}

export function acceptCreditError() {
  return {
    type: '@main/ACCEPT_CREDIT_ERROR',
    payload: {},
  };
}

// Accept protection plain
export function acceptProtectionPlainRequest(scoreValue, id) {
  return {
    type: '@main/ACCEPT_PROTECTION_PLAIN_REQUEST',
    payload: {scoreValue, id},
  };
}

export function acceptProtectionPlainSuccess(
  newScoreValue,
  id,
  scoreDescription,
  scoreLevel
) {
  return {
    type: '@main/ACCEPT_PROTECTION_PLAIN_SUCCESS',
    payload: {
      newScoreValue,
      id,
      scoreDescription,
      scoreLevel,
    },
  };
}

export function acceptProtectionPlainError() {
  return {
    type: '@main/ACCEPT_PROTECTION_PLAIN_ERROR',
    payload: {},
  };
}
