import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';
import logger from './logger';

const persistConfig = {
  key: 'player',
  storage,
};

function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const middleware = (getDefaultMiddleware: any) => {
    const m = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/HYDRATE', 'persist/FLUSH'],
      },
    }).concat(...[sagaMiddleware]);
    if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
      m.push(logger);
    }
    return m;
  };

  const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: middleware,
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

const store = configureAppStore();
const persistor = persistStore(store);

export { store, persistor };
