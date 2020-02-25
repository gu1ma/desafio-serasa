import {all, takeLatest, call, put} from 'redux-saga/effects';

import {
  getUserDataSuccess,
  getUserDataError,
  payDebtSuccess,
  payDebtError,
} from '~/store/modules/main/actions';

// import api from '~/services/api';

export function* getUserData() {
  try {
    // aqui vira a req a futura api
    // const response = yield call(api.put, 'users', profile);
    const response = {
      data: {
        userName: 'Rick Sanches',
        userPhoto: {
          uri:
            'https://i.pinimg.com/originals/e6/22/d2/e622d2fdccb6fdf31133dd7ab273892a.jpg',
        },
        score: 26,
        scoreDescription: 'Sua pontuação é baixa',
        scoreStatus: 'low',
        scoreLevel: 0,
        debtData: [
          {
            id: 1,
            uriImgDebt: {
              uri: 'https://i.ya-webdesign.com/images/xbox-one-icon-png-2.png',
            },
            oldValue: 'R$280,00',
            newValue: 'por R$79,90',
          },
          {
            id: 2,
            uriImgDebt: {
              uri: 'https://i.ya-webdesign.com/images/xbox-one-icon-png-2.png',
            },
            oldValue: 'R$280,00',
            newValue: 'por R$79,90',
          },
        ],
        creditData: [],
      },
    };

    yield put(getUserDataSuccess(response.data));
  } catch (error) {
    yield put(getUserDataError());
  }
}

export function* payDebt({payload}) {
  try {
    const {scoreValue, id} = payload;
    const newScoreValue = scoreValue + 30 >= 100 ? 100 : scoreValue + 30;

    let scoreDescription = 'Sua pontuação é baixa';
    let scoreLevel = 0;
    let creditData = null;

    if (newScoreValue >= 30 && newScoreValue < 60) {
      scoreDescription = 'Sua pontuação é média';
      scoreLevel = 1;
      creditData = {
        id: 1,
        uriImgCredit: {
          uri:
            'https://vignette.wikia.nocookie.net/yugioh/images/6/68/Face_Down_Defense_Position.png/revision/latest?cb=20100726091546',
        },
        creditDesc: 'Anuidade Grátis',
        creditValue: 'Limite de R$2.000,00',
      };
    }

    if (newScoreValue >= 60) {
      scoreDescription = 'Sua pontuação é alta';
      scoreLevel = 2;
      creditData = null;
    }

    yield put(
      payDebtSuccess(
        newScoreValue,
        id,
        scoreDescription,
        scoreLevel,
        creditData
      )
    );
  } catch (error) {
    yield put(payDebtError());
  }
}

export default all([
  takeLatest('@main/GET_USER_DATA_REQUEST', getUserData),
  takeLatest('@main/PAY_DEBT_REQUEST', payDebt),
]);
