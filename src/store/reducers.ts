import { combineReducers } from '@reduxjs/toolkit';
import playerReducer from 'app/components/Player/slice';

const rootReducer = combineReducers({
  player: playerReducer,
});

export default rootReducer;
