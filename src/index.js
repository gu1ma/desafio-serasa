import React from 'react';

import {Provider} from 'react-redux';

import Routes from '~/routes';

import store from '~/store/index';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
