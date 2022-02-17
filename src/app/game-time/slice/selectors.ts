import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { initialState, GameTimeState } from '.';

const domain = (state: RootState): GameTimeState =>
  state.gameTime || initialState;

export const selectCurrentTime = createSelector(
  [domain],
  state => state.currentTime,
);

export const selectGameTime = createSelector([domain], state => state);
