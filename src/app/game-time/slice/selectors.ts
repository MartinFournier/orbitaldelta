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

export const selectTurbo = createSelector([domain], state => state.isTurboing);
export const selectTurboAvailability = createSelector([domain], state => {
  const normalize = (value: bigint, min: bigint, max: bigint) =>
    Number(((value - max) * 100n) / (max - min));

  const turbo = Math.floor(state.turboDeltaMs ?? 0);
  const max = BigInt(1000 * 60 * 1 * state.speedMultiplier);

  if (turbo === 0 || isNaN(turbo)) return 0;

  const value = BigInt(turbo * state.speedMultiplier);
  if (value >= max) return 100;

  const normalized = normalize(value, 0n, max);
  return 100 - Math.abs(normalized);
});

export const selectTurboTime = createSelector(
  [domain],
  state => state.turboDeltaMs,
);

export const selectIsPaused = createSelector([domain], state => state.isPaused);

export const selectGameTime = createSelector([domain], state => state);
