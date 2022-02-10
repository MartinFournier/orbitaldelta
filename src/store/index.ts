import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createCompressor from 'redux-persist-transform-compress';

import rootReducer from './reducers';
import rootSaga from './sagas';
import logger from './logger';

const lzCompressor = createCompressor();

const persistConfig = {
  key: 'root',
  storage,
  transforms: [lzCompressor],
};

function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const middleware = (getDefaultMiddleware: unknown) => {
    if (typeof getDefaultMiddleware !== 'function') throw new Error('Invalid middleware setup');
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
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

const store = configureAppStore();
const persistor = persistStore(store);
export { store, persistor };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
