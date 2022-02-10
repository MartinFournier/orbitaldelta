import { combineReducers } from '@reduxjs/toolkit';
import playerReducer from 'app/player/slice';

const rootReducer = combineReducers({
  player: playerReducer,
});

export default rootReducer;
