import * as Actions from '~/store/modules/main/actions';
import reducer, {INITIAL_STATE} from '~/store/modules/main/reducer';
import {MOCK_DEBIT_STATE, MOCK_DEFAULT_STATE} from '../../../data/main';

describe('Should test user data reducer', () => {
  it('@main/GET_USER_DATA_REQUEST', () => {
    const state = reducer(INITIAL_STATE, Actions.getUserDataRequest());

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
      Actions.getUserDataSuccess(mockResponse)
    );

    expect(state).toStrictEqual({
      userData: mockResponse,
      loading: false,
      error: false,
    });
  });

  it('@main/GET_USER_DATA_ERROR', () => {
    const state = reducer(INITIAL_STATE, Actions.getUserDataError());

    expect(state).toStrictEqual({
      userData: null,
      loading: false,
      error: true,
    });
  });
});

describe('Should test debt reducer', () => {
  it('@main/PAY_DEBT_REQUEST', () => {
    const state = reducer(
      MOCK_DEBIT_STATE,
      Actions.payDebtRequest(MOCK_DEBIT_STATE.userData.score, 1)
    );

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
      Actions.payDebtSuccess(
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
    const state = reducer(MOCK_DEBIT_STATE, Actions.payDebtError());

    expect(state).toStrictEqual({
      userData: MOCK_DEBIT_STATE.userData,
      loading: false,
      error: true,
    });
  });
});

describe('Should test credit reducer', () => {
  it('@main/ACCEPT_CREDIT_REQUEST', () => {
    const state = reducer(
      MOCK_DEFAULT_STATE,
      Actions.acceptCreditRequest(MOCK_DEFAULT_STATE.userData.score, 1)
    );
    const stateResponse = {
      ...MOCK_DEFAULT_STATE,
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
      MOCK_DEFAULT_STATE,
      Actions.acceptCreditSuccess(
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
    const mockResponse = MOCK_DEFAULT_STATE.userData;
    const state = reducer(MOCK_DEFAULT_STATE, Actions.acceptCreditError({}));

    expect(state).toStrictEqual({
      userData: mockResponse,
      loading: false,
      error: true,
    });
  });
});

describe('Should test protection plain reducer', () => {
  it('@main/ACCEPT_PROTECTION_PLAIN_REQUEST', () => {
    const state = reducer(
      MOCK_DEFAULT_STATE,
      Actions.acceptProtectionPlainRequest(MOCK_DEFAULT_STATE.userData.score, 1)
    );
    const stateResponse = {
      ...MOCK_DEFAULT_STATE,
      loading: true,
    };

    expect(state).toStrictEqual(stateResponse);
  });

  it('@main/ACCEPT_PROTECTION_PLAIN_SUCCESS', () => {
    const mockResponse = {
      score: 45,
      scoreDescription: 'Mock pontuation description',
      scoreStatus: 'low',
      scoreLevel: 0,
      debtData: [],
      protectionPlainData: [],
      creditData: [],
    };

    const state = reducer(
      MOCK_DEFAULT_STATE,
      Actions.acceptProtectionPlainSuccess(
        mockResponse.score,
        2,
        mockResponse.scoreDescription,
        mockResponse.scoreLevel
      )
    );

    expect(state).toStrictEqual({
      userData: mockResponse,
      loading: false,
      error: false,
    });
  });

  it('@main/ACCEPT_PROTECTION_PLAIN_ERROR', () => {
    const mockResponse = MOCK_DEFAULT_STATE.userData;
    const state = reducer(
      MOCK_DEFAULT_STATE,
      Actions.acceptProtectionPlainError({})
    );

    expect(state).toStrictEqual({
      userData: mockResponse,
      loading: false,
      error: true,
    });
  });
});
