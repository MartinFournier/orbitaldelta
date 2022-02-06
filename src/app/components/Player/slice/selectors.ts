import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.player || initialState;

export const selectPlayer = createSelector([selectDomain], state => state);
export const selectUsername = createSelector([selectDomain], state => state.username);
export const selectLastProcessedOn = createSelector([selectDomain], state => state.lastProcessedOn);
