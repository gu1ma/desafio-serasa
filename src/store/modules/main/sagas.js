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

import api from '~/services/api';

export function* getUserData() {
  try {
    const {data} = yield call(api.get, 'get-user-data');
    yield put(getUserDataSuccess(data));
  } catch (error) {
    Alert.alert('Erro!', 'Houve algum erro ao buscar os dados do usuário!');
    yield put(getUserDataError());
  }
}

export function* payDebt({payload}) {
  try {
    const {scoreValue, id} = payload;

    const {data} = yield call(api.post, 'pay-debt', {scoreValue});

    const {
      newScoreValue,
      scoreDescription,
      scoreLevel,
      creditData,
      protectionPlainData,
    } = data;

    if (creditData) {
      Alert.alert('Parabéns!', 'Você recebeu uma nova proposta de crédito!');
    }

    if (newScoreValue > 90) {
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
    Alert.alert('Erro!', 'Houve algum erro ao executar a ação!');
    yield put(payDebtError());
  }
}

export function* acceptCredit({payload}) {
  try {
    const {scoreValue, id} = payload;

    const {data} = yield call(api.post, 'accept-credit', {scoreValue});

    const {
      newScoreValue,
      scoreDescription,
      scoreLevel,
      protectionPlainData,
    } = data;

    if (newScoreValue > 90) {
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
    Alert.alert('Erro!', 'Houve algum erro ao executar a ação!');
    yield put(acceptCreditError());
  }
}

export function* acceptProtectionPlain({payload}) {
  try {
    const {scoreValue, id} = payload;

    const {data} = yield call(api.post, 'accept-protection-plain', {
      scoreValue,
    });

    const {newScoreValue, scoreDescription, scoreLevel} = data;

    yield put(
      acceptProtectionPlainSuccess(
        newScoreValue,
        id,
        scoreDescription,
        scoreLevel
      )
    );
  } catch (error) {
    Alert.alert('Erro!', 'Houve algum erro ao executar a ação!');
    yield put(acceptProtectionPlainError());
  }
}

export default all([
  takeLatest('@main/GET_USER_DATA_REQUEST', getUserData),
  takeLatest('@main/PAY_DEBT_REQUEST', payDebt),
  takeLatest('@main/ACCEPT_CREDIT_REQUEST', acceptCredit),
  takeLatest('@main/ACCEPT_PROTECTION_PLAIN_REQUEST', acceptProtectionPlain),
]);
