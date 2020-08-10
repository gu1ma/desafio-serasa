export const MOCK_DEBIT_STATE = {
  userData: {
    score: 25,
    scoreDescription: 'Mock pontuation description',
    scoreStatus: 'low',
    scoreLevel: 0,
    debtData: [],
    protectionPlainData: null,
    creditData: null,
  },
  loading: false,
  error: false,
};

export const MOCK_DEFAULT_STATE = {
  userData: {
    score: 25,
    scoreDescription: 'Mock pontuation description',
    scoreStatus: 'low',
    scoreLevel: 0,
    debtData: [],
    protectionPlainData: null,
    creditData: [],
  },
  loading: false,
  error: false,
};

export const MOCK_TYPES = {
  GET_USER_DATA_REQUEST: '@main/GET_USER_DATA_REQUEST',
  GET_USER_DATA_SUCCESS: '@main/GET_USER_DATA_SUCCESS',
  GET_USER_DATA_ERROR: '@main/GET_USER_DATA_ERROR',

  PAY_DEBT_REQUEST: '@main/PAY_DEBT_REQUEST',
  PAY_DEBT_SUCCESS: '@main/PAY_DEBT_SUCCESS',
  PAY_DEBT_ERROR: '@main/PAY_DEBT_ERROR',

  ACCEPT_CREDIT_REQUEST: '@main/ACCEPT_CREDIT_REQUEST',
  ACCEPT_CREDIT_SUCCCESS: '@main/ACCEPT_CREDIT_SUCCESS',
  ACCEPT_CREDIT_ERROR: '@main/ACCEPT_CREDIT_ERROR',

  ACCEPT_PROTECTION_PLAIN_REQUEST: '@main/ACCEPT_PROTECTION_PLAIN_REQUEST',
  ACCEPT_PROTECTION_PLAIN_SUCCESS: '@main/ACCEPT_PROTECTION_PLAIN_SUCCESS',
  ACCEPT_PROTECTION_PLAIN_ERROR: '@main/ACCEPT_PROTECTION_PLAIN_ERROR',
};
