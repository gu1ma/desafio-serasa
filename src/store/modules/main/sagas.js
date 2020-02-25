import {all, takeLatest, call, put} from 'redux-saga/effects';

import {Alert} from 'react-native';

import {
  getUserDataSuccess,
  getUserDataError,
  payDebtSuccess,
  payDebtError,
  acceptCreditSuccess,
  acceptCreditError,
  acceptProtectionPlainSuccess,
  acceptProtectionPlainError,
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
        score: 25,
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
        protectionPlainData: [],
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
    const upScore = 25;
    const newScoreValue =
      scoreValue + upScore >= 100 ? 100 : scoreValue + upScore;

    let scoreDescription = 'Sua pontuação é baixa';
    let scoreLevel = 0;
    let creditData = null;
    let protectionPlainData = null;

    if (newScoreValue >= 30 && newScoreValue < 60) {
      scoreDescription = 'Sua pontuação é média';
      scoreLevel = 1;
      creditData = {
        id: 1,
        uriImgCredit: {
          uri:
            'https://vignette.wikia.nocookie.net/yugioh/images/6/68/Face_Down_Defense_Position.png/revision/latest?cb=20100726091546',
        },
        cardTitle: 'Proposta de crédito',
        creditTitle: 'Encontramos uma oferta de cartão de crédito',
        creditDesc: 'Anuidade Grátis',
        creditValue: 'Limite de R$2.000,00',
      };

      Alert.alert('Parabéns!', 'Você recebeu uma nova proposta de crédito!');
    }

    if (newScoreValue > 50) {
      protectionPlainData = {
        id: 1,
        cardTitle: 'Proteja seus dados',
        cardDescription: 'Temos uma oferta de proteção de dados pra você!',
        uriImgCardProtection: {
          uri:
            'https://st2.depositphotos.com/5394392/12199/v/950/depositphotos_121997332-stock-illustration-shield-protection-icon-defense-equipment.jpg',
        },
        oldValue: '',
        newValue: 'por R$99,90/mês',
      };
    }

    if (newScoreValue >= 60) {
      scoreDescription = 'Sua pontuação é alta';
      scoreLevel = 2;
      creditData = null;
    }

    if (newScoreValue >= 90) {
      scoreLevel = 3;
      protectionPlainData = {
        id: 1,
        cardTitle: 'Proteja seus dados',
        cardDescription: 'Temos uma oferta de proteção de dados pra você!',
        uriImgCardProtection: {
          uri:
            'https://st2.depositphotos.com/5394392/12199/v/950/depositphotos_121997332-stock-illustration-shield-protection-icon-defense-equipment.jpg',
        },
        oldValue: 'de R$99,90/mês',
        newValue: 'por R$59,90/mês',
      };

      Alert.alert(
        'Parabéns!',
        'Você recebeu um desconto no monitoramento dos seus dados!'
      );
    }

    yield put(
      payDebtSuccess(
        newScoreValue,
        id,
        scoreDescription,
        scoreLevel,
        creditData,
        protectionPlainData
      )
    );
  } catch (error) {
    yield put(payDebtError());
  }
}

export function* acceptCredit({payload}) {
  try {
    const {scoreValue, id} = payload;
    const upScore = 20;
    const newScoreValue =
      scoreValue + upScore >= 100 ? 100 : scoreValue + upScore;

    let protectionPlainData = null;

    let scoreDescription = 'Sua pontuação é baixa';
    let scoreLevel = 0;

    if (newScoreValue >= 30 && newScoreValue < 60) {
      scoreDescription = 'Sua pontuação é média';
      scoreLevel = 1;
    }

    if (newScoreValue >= 60) {
      scoreDescription = 'Sua pontuação é alta';
      scoreLevel = 2;
    }

    if (newScoreValue > 50) {
      protectionPlainData = {
        id: 1,
        cardTitle: 'Proteja seus dados',
        cardDescription: 'Temos uma oferta de proteção de dados pra você!',
        uriImgCardProtection: {
          uri:
            'https://st2.depositphotos.com/5394392/12199/v/950/depositphotos_121997332-stock-illustration-shield-protection-icon-defense-equipment.jpg',
        },
        oldValue: '',
        newValue: 'por R$99,90/mês',
      };
    }

    if (newScoreValue >= 90) {
      scoreLevel = 3;
      protectionPlainData = {
        id: 1,
        cardTitle: 'Proteja seus dados',
        cardDescription: 'Temos uma oferta de proteção de dados pra você!',
        uriImgCardProtection: {
          uri:
            'https://st2.depositphotos.com/5394392/12199/v/950/depositphotos_121997332-stock-illustration-shield-protection-icon-defense-equipment.jpg',
        },
        oldValue: 'de R$99,90/mês',
        newValue: 'por R$59,90/mês',
      };

      Alert.alert(
        'Parabéns!',
        'Você recebeu um desconto no monitoramento dos seus dados!'
      );
    }

    yield put(
      acceptCreditSuccess(
        newScoreValue,
        id,
        scoreDescription,
        scoreLevel,
        protectionPlainData
      )
    );
  } catch (error) {
    yield put(acceptCreditError());
  }
}

export function* acceptProtectionPlain({payload}) {
  try {
    const {scoreValue, id} = payload;
    const upScore = 10;
    const newScoreValue =
      scoreValue + upScore >= 100 ? 100 : scoreValue + upScore;

    let scoreDescription = 'Sua pontuação é baixa';
    let scoreLevel = 0;

    if (newScoreValue >= 30 && newScoreValue < 60) {
      scoreDescription = 'Sua pontuação é média';
      scoreLevel = 1;
    }

    if (newScoreValue >= 60) {
      scoreDescription = 'Sua pontuação é alta';
      scoreLevel = 2;
    }

    if (newScoreValue >= 90) {
      scoreLevel = 3;
    }

    yield put(
      acceptProtectionPlainSuccess(
        newScoreValue,
        id,
        scoreDescription,
        scoreLevel
      )
    );
  } catch (error) {
    yield put(acceptProtectionPlainError());
  }
}

export default all([
  takeLatest('@main/GET_USER_DATA_REQUEST', getUserData),
  takeLatest('@main/PAY_DEBT_REQUEST', payDebt),
  takeLatest('@main/ACCEPT_CREDIT_REQUEST', acceptCredit),
  takeLatest('@main/ACCEPT_PROTECTION_PLAIN_REQUEST', acceptProtectionPlain),
]);
