import * as Score from '~/store/modules/main/actions';
import reducer, {INITIAL_STATE} from '~/store/modules/main/reducer';
import {MOCK_DEBIT_STATE, MOCK_CREDIT_STATE} from '../../../data/main';

describe('Should test user data reducer', () => {
  it('@main/GET_USER_DATA_REQUEST', () => {
    const state = reducer(INITIAL_STATE, Score.getUserDataRequest());

    expect(state).toStrictEqual({
      userData: null,
      loading: true,
      error: false,
    });
  });

  it('@main/GET_USER_DATA_SUCCESS', () => {
    const mockResponse = {
      userName: 'User mock',
      userPhoto: {
        uri: 'url mock user profile',
      },
      score: 25,
      scoreDescription: 'Mock pontuation description',
      scoreStatus: 'low',
      scoreLevel: 0,
      debtData: [],
      creditData: [],
      protectionPlainData: [],
    };

    const state = reducer(
      INITIAL_STATE,
      Score.getUserDataSuccess(mockResponse)
    );

    expect(state).toStrictEqual({
      userData: mockResponse,
      loading: false,
      error: false,
    });
  });

  it('@main/GET_USER_DATA_ERROR', () => {
    const state = reducer(INITIAL_STATE, Score.getUserDataError());

    expect(state).toStrictEqual({
      userData: null,
      loading: false,
      error: true,
    });
  });
});

describe('Should test debt reducer', () => {
  it('@main/PAY_DEBT_REQUEST', () => {
    const state = reducer(MOCK_DEBIT_STATE, Score.payDebtRequest(20, 1));

    const stateResponse = {
      ...MOCK_DEBIT_STATE,
      loading: true,
    };

    expect(state).toStrictEqual(stateResponse);
  });

  it('@main/PAY_DEBT_SUCCESS', () => {
    const mockResponse = {
      score: 45,
      scoreDescription: 'Mock pontuation description',
      scoreStatus: 'low',
      scoreLevel: 0,
      debtData: [],
      creditData: null,
      protectionPlainData: null,
    };

    const state = reducer(
      MOCK_DEBIT_STATE,
      Score.payDebtSuccess(
        mockResponse.score,
        2,
        mockResponse.scoreDescription,
        mockResponse.scoreLevel,
        mockResponse.creditData,
        mockResponse.protectionPlainData
      )
    );

    expect(state).toStrictEqual({
      userData: mockResponse,
      loading: false,
      error: false,
    });
  });

  it('@main/PAY_DEBT_ERROR', () => {
    const state = reducer(MOCK_DEBIT_STATE, Score.payDebtError());

    expect(state).toStrictEqual({
      userData: MOCK_DEBIT_STATE.userData,
      loading: false,
      error: true,
    });
  });
});

describe('Should test credit reducer', () => {
  it('@main/ACCEPT_CREDIT_REQUEST', () => {
    const state = reducer(MOCK_CREDIT_STATE, Score.acceptCreditRequest(20, 1));
    const stateResponse = {
      ...MOCK_CREDIT_STATE,
      loading: true,
    };

    expect(state).toStrictEqual(stateResponse);
  });

  it('@main/ACCEPT_CREDIT_SUCCESS', () => {
    const mockResponse = {
      score: 45,
      scoreDescription: 'Mock pontuation description',
      scoreStatus: 'low',
      scoreLevel: 0,
      debtData: [],
      protectionPlainData: [[]],
      creditData: [],
    };

    const state = reducer(
      MOCK_CREDIT_STATE,
      Score.acceptCreditSuccess(
        mockResponse.score,
        2,
        mockResponse.scoreDescription,
        mockResponse.scoreLevel,
        mockResponse.creditData,
        mockResponse.protectionPlainData
      )
    );

    expect(state).toStrictEqual({
      userData: mockResponse,
      loading: false,
      error: false,
    });
  });

  it('@main/ACCEPT_CREDIT_ERROR', () => {
    const mockResponse = {
      score: 25,
      scoreDescription: 'Mock pontuation description',
      scoreStatus: 'low',
      scoreLevel: 0,
      debtData: [],
      protectionPlainData: null,
      creditData: [],
    };

    const state = reducer(
      MOCK_CREDIT_STATE,
      Score.acceptCreditError(
        mockResponse.score,
        2,
        mockResponse.scoreDescription,
        mockResponse.scoreLevel,
        mockResponse.creditData,
        mockResponse.protectionPlainData
      )
    );

    expect(state).toStrictEqual({
      userData: mockResponse,
      loading: false,
      error: true,
    });
  });
});
