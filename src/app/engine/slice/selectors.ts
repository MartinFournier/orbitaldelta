import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'store';
import { initialState, EngineState } from '.';

const domain = (state: RootState): EngineState => state.engine || initialState;

export const selectIsGameSaving = createSelector(
  [domain],
  state => state.isGameSaving,
);
export const selectGameSavedOnDisplay = createSelector([domain], state =>
  state.gameSavedOn ? new Date(state.gameSavedOn).toLocaleString() : 'n/a',
);
export const selectGameSavedOn = createSelector(
  [domain],
  state => state.gameSavedOn,
);
export const selectShowEngineStats = createSelector(
  [domain],
  state => state.showEngineStats,
);
