import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { initialState, GameTimeState } from '.';

const domain = (state: RootState): GameTimeState =>
  state.gameTime || initialState;

export const selectCurrentTime = createSelector(
  [domain],
  state => state.currentTime,
);

export const selectCurrentSpeed = createSelector([domain], state => ({
  speed: state.speedMultiplier,
  isPaused: state.isPaused,
}));

export const selectTurbo = createSelector([domain], state => ({
  isTurboing: state.isTurboing,
  x: false,
}));

export const selectIsPaused = createSelector([domain], state => state.isPaused);

export const selectGameTime = createSelector([domain], state => state);
