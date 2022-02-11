import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import createCompressor from 'redux-persist-transform-compress';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { devtoolBlackListedActions } from './devTool';

const isDev =
  process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test';

const lzCompressor = createCompressor();
const transforms = [];
if (!isDev) transforms.push(lzCompressor);

const persistConfig = {
  key: 'root',
  keyPrefix: 'orbital',
  version: 1,
  storage,
  transforms,
  throttle: 100,
  debug: isDev,
};

function setupStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(sagaMiddleware),
    devTools: { actionsBlacklist: devtoolBlackListedActions },
  });

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);
  return { store, persistor };
}

const { store, persistor } = setupStore();
export { store, persistor };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
