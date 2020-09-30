import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import persistReducer from './persistReducer';

import ducks from './ducks/index';
import saga from './sagas/index';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducer(ducks), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(saga);

export { store, persistor };
