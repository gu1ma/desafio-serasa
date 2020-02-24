import React from 'react';

import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Routes from '~/routes';

import colors from '~/styles/colors';

import store from '~/store/index';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.status.danger.dark}
        />
        <Routes />
      </Provider>
    </>
  );
}
