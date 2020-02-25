import produce from 'immer';

const INITIAL_STATE = {
  userData: null,
  loading: false,
  error: false,
};

export default function main(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      // USER DATA
      case '@main/GET_USER_DATA_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@main/GET_USER_DATA_SUCCESS': {
        draft.loading = false;
        draft.userData = action.payload.userData;
        draft.error = false;
        break;
      }
      case '@main/GET_USER_DATA_ERROR': {
        draft.loading = false;
        draft.userData = null;
        draft.error = true;
        break;
      }

      // DEBTS
      case '@main/@main/PAY_DEBT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@main/PAY_DEBT_SUCCESS': {
        console.log('plain data', action.payload.protectionPlainData);
        draft.loading = false;
        draft.userData.scoreDescription = action.payload.scoreDescription;
        draft.userData.scoreLevel = action.payload.scoreLevel;
        draft.userData.score = action.payload.newScoreValue;
        draft.userData.debtData = draft.userData.debtData.filter(el => {
          return el.id !== action.payload.id;
        });
        if (action.payload.creditData !== null) {
          draft.userData.creditData.push(action.payload.creditData);
        }
        if (action.payload.protectionPlainData !== null) {
          draft.userData.protectionPlainData = [
            action.payload.protectionPlainData,
          ];
        }
        draft.error = false;
        break;
      }
      case '@main/PAY_DEBT_ERROR': {
        draft.loading = false;
        draft.error = true;
        break;
      }

      // CREDITS
      case '@main/ACCEPT_CREDIT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@main/ACCEPT_CREDIT_SUCCESS': {
        draft.loading = false;
        draft.userData.scoreDescription = action.payload.scoreDescription;
        draft.userData.scoreLevel = action.payload.scoreLevel;
        draft.userData.score = action.payload.newScoreValue;
        draft.userData.creditData = draft.userData.creditData.filter(el => {
          return el.id !== action.payload.id;
        });
        if (action.payload.protectionPlainData !== null) {
          draft.userData.protectionPlainData = [
            action.payload.protectionPlainData,
          ];
        }
        draft.error = false;
        break;
      }
      case '@main/ACCEPT_CREDIT_ERROR': {
        draft.loading = false;
        draft.error = true;
        break;
      }

      // PROTECTION PLAIN
      case '@main/ACCEPT_PROTECTION_PLAIN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@main/ACCEPT_PROTECTION_PLAIN_SUCCESS': {
        draft.loading = false;
        draft.userData.scoreDescription = action.payload.scoreDescription;
        draft.userData.scoreLevel = action.payload.scoreLevel;
        draft.userData.score = action.payload.newScoreValue;
        draft.userData.protectionPlainData = [];
        draft.error = false;
        break;
      }
      case '@main/ACCEPT_PROTECTION_PLAIN_ERROR': {
        draft.loading = false;
        draft.error = true;
        break;
      }

      default:
    }
  });
}
