import * as Score from '~/store/modules/main/actions';
import reducer, {INITIAL_STATE} from '~/store/modules/main/reducer';

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
      debtData: [
        {
          id: 1,
          uriImgDebt: {
            uri: 'mock img debt',
          },
          oldValue: 'R$280,00',
          newValue: 'por R$79,90',
        },
        {
          id: 2,
          uriImgDebt: {
            uri: 'mock img credit',
          },
          oldValue: 'R$280,00',
          newValue: 'por R$79,90',
        },
      ],
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
