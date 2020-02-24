import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '~/store/modules/rootReducer';
import sagas from '~/store/modules/rootSaga';

const middlewares = [];

const sagaMonitor = null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

middlewares.push(sagaMiddleware);

const composer = compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
