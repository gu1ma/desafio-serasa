import produce from 'immer';

const INITIAL_STATE = {
  userData: null,
  loading: false,
  error: false,
};

export default function main(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
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

      case '@main/@main/PAY_DEBT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@main/PAY_DEBT_SUCCESS': {
        draft.loading = false;
        draft.userData.scoreDescription = action.payload.scoreDescription;
        draft.userData.scoreLevel = action.payload.scoreLevel;
        draft.userData.score = action.payload.newScoreValue;
        draft.userData.debtData = draft.userData.debtData.filter(el => {
          return el.id !== action.payload.id;
        });
        draft.error = false;
        break;
      }
      case '@main/PAY_DEBT_ERROR': {
        draft.loading = false;
        draft.error = true;
        break;
      }

      default:
    }
  });
}
