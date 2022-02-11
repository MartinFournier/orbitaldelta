import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'store';
import { initialState, PlayerState } from '.';

const domain = (state: RootState): PlayerState => state.player || initialState;

export const selectPlayer = createSelector([domain], state => state);
export const selectUsername = createSelector([domain], state => state.username);
export const selectLastProcessedOn = createSelector(
  [domain],
  state => state.lastProcessedOn,
);
