import * as Actions from '~/store/modules/main/actions';
import {
  MOCK_DEBIT_STATE,
  MOCK_DEFAULT_STATE,
  MOCK_TYPES,
} from '../../../data/main';

describe('Should test user data action', () => {
  it('getUserDataRequest', () => {
    const expected = {
      type: MOCK_TYPES.GET_USER_DATA_REQUEST,
      payload: {},
    };

    expect(Actions.getUserDataRequest()).toEqual(expected);
  });

  it('getUserDataSuccess', () => {
    const expected = {
      type: MOCK_TYPES.GET_USER_DATA_SUCCESS,
      payload: {userData: MOCK_DEFAULT_STATE.userData},
    };

    expect(Actions.getUserDataSuccess(MOCK_DEFAULT_STATE.userData)).toEqual(
      expected
    );
  });

  it('getUserDataError', () => {
    const expected = {
      type: MOCK_TYPES.GET_USER_DATA_ERROR,
      payload: {},
    };

    expect(Actions.getUserDataError({})).toEqual(expected);
  });

  it('payDebtRequest', () => {
    const mockPayload = {scoreValue: 25, id: 1};
    const expected = {
      type: MOCK_TYPES.PAY_DEBT_REQUEST,
      payload: mockPayload,
    };

    expect(
      Actions.payDebtRequest(mockPayload.scoreValue, mockPayload.id)
    ).toEqual(expected);
  });

  it('payDebtSuccess', () => {
    const mockPayload = {
      newScoreValue: 20,
      id: 1,
      scoreDescription: 'Score description',
      scoreLevel: 'score level',
      creditData: [],
      protectionPlainData: [],
    };
    const expected = {
      type: MOCK_TYPES.PAY_DEBT_SUCCESS,
      payload: mockPayload,
    };

    expect(
      Actions.payDebtSuccess(
        mockPayload.newScoreValue,
        mockPayload.id,
        mockPayload.scoreDescription,
        mockPayload.scoreLevel,
        mockPayload.creditData,
        mockPayload.protectionPlainData
      )
    ).toEqual(expected);
  });

  it('payDebtError', () => {
    const expected = {
      type: MOCK_TYPES.PAY_DEBT_ERROR,
      payload: {},
    };

    expect(Actions.payDebtError()).toEqual(expected);
  });
});
