import React from 'react';
import {render} from '@testing-library/react-native';

import CardHead from '~/components/CardHead';

describe('CardHead', () => {
  const userData = {
    userName: 'Rick Sanches',
    userPhoto: {
      uri:
        'https://i.pinimg.com/originals/e6/22/d2/e622d2fdccb6fdf31133dd7ab273892a.jpg',
    },
    score: 25,
    scoreDescription: 'Sua pontuação é baixa',
  };

  it('Should have the userimage Image component', () => {
    const {getByTestId} = render(<CardHead userData={userData} />);

    expect(getByTestId('userphoto')).toBeTruthy();
  });

  it('Should have the usename Text component', () => {
    const {getByTestId} = render(<CardHead userData={userData} />);

    expect(getByTestId('username')).toBeTruthy();
  });
});
