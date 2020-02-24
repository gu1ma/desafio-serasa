export function getUserDataRequest() {
  return {
    type: '@main/GET_USER_DATA_REQUEST',
    payload: {},
  };
}

export function getUserDataSuccess() {
  return {
    type: '@main/GET_USER_DATA_SUCCESS',
    payload: {
      userName: 'Rick Sanches',
      userPhoto: {
        uri:
          'https://i.pinimg.com/originals/e6/22/d2/e622d2fdccb6fdf31133dd7ab273892a.jpg',
      },
      score: 26,
      scoreDescription: 'Sua pontuação é baixa',
      scoreStatus: 'low',
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
        {
          id: 3,
          uriImgDebt: {
            uri: 'https://i.ya-webdesign.com/images/xbox-one-icon-png-2.png',
          },
          oldValue: 'R$280,00',
          newValue: 'por R$79,90',
        },
      ],
      creditData: [
        {
          id: 1,
          uriImgCredit: {
            uri:
              'https://vignette.wikia.nocookie.net/yugioh/images/6/68/Face_Down_Defense_Position.png/revision/latest?cb=20100726091546',
          },
          creditDesc: 'Anuidade Grátis',
          creditValue: 'Limite de R$2.000,00',
        },
      ],
    },
  };
}

export function getUserDataError() {
  return {
    type: '@main/GET_USER_DATA_ERROR',
    payload: {},
  };
}