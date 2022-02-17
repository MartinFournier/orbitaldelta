import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';

import rootReducer, { RootReducerType } from './reducers';
import rootSaga from './sagas';
import { devtoolBlackListedActions } from './devTool';
import {
  getPersistReducer,
  getPersistStore,
  ignoredSerializableActions,
} from './persist';

function setupStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const store = configureStore({
    reducer: getPersistReducer(rootReducer),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ignoredSerializableActions,
        },
      }).concat(sagaMiddleware),
    devTools: { actionsBlacklist: devtoolBlackListedActions },
  });

  sagaMiddleware.run(rootSaga);

  const persistor = getPersistStore(store);
  return { store, persistor };
}

const { store, persistor } = setupStore();
export { store, persistor };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
