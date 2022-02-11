import { combineReducers } from '@reduxjs/toolkit';
import playerReducer from 'app/player/slice';
import settingsReducer from 'app/settings/slice';
import engineReducer from 'app/engine/slice';

const rootReducer = combineReducers({
  player: playerReducer,
  settings: settingsReducer,
  engine: engineReducer,
});

export default rootReducer;
