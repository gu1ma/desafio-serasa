import {all} from 'redux-saga/effects';

import main from '~/store/modules/main/sagas';

export default function* rootSaga() {
  return yield all([main]);
}
