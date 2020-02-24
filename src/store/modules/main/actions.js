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
