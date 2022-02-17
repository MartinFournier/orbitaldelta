import partial from 'lodash/partial';
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

import { createBlacklistFilter } from 'redux-persist-transform-filter';

import storage from 'redux-persist/lib/storage';
import createCompressor from 'redux-persist-transform-compress';
import { envIsDev } from 'utilities/environment';

const blacklistFilter = createBlacklistFilter('engine', ['isGameSaving']);
const lzCompressor = createCompressor();
const transforms = [blacklistFilter];
if (!envIsDev) transforms.push(lzCompressor);

export const persistConfig = {
  key: 'root',
  keyPrefix: 'orbital',
  version: 1,
  storage,
  transforms,
  throttle: 100,
  debug: envIsDev,
};

export const getPersistReducer = partial(persistReducer, persistConfig);
export const getPersistStore = persistStore;

export const ignoredSerializableActions = [
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
];
