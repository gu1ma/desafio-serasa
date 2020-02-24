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
        draft.userData = action.payload;
        draft.error = false;
        break;
      }
      case '@main/GET_USER_DATA_ERROR': {
        draft.loading = false;
        draft.userData = null;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
