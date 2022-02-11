import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { initialState, SettingsState } from '.';

const domain = (state: RootState): SettingsState =>
  state.settings || initialState;

export const selectAutosave = createSelector([domain], state => ({
  enabled: state.autosaveEnabled,
  frequencyMs: state.autosaveFrequencyMs,
}));

export const selectAutosaveEnabled = createSelector(
  [domain],
  state => state.autosaveEnabled,
);

export const selectAutosaveFrequencyMins = createSelector(
  [domain],
  state => state.autosaveFrequencyMs / (1000 * 60),
);

export type SelectAutosaveType = ReturnType<typeof selectAutosave>;
