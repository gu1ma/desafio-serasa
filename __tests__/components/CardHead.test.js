import React from 'react';
import {render} from '@testing-library/react-native';

import {MOCK_DEFAULT_STATE} from '../data/main';

import CardHead from '~/components/CardHead';

describe('CardHead', () => {
  it('Should have the userimage Image component', () => {
    const {getByTestId} = render(<CardHead userData={MOCK_DEFAULT_STATE} />);

    expect(getByTestId('userphoto')).toBeTruthy();
  });

  it('Should have the usename Text component', () => {
    const {getByTestId} = render(<CardHead userData={MOCK_DEFAULT_STATE} />);

    expect(getByTestId('username')).toBeTruthy();
  });
});
