import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { initialState, SettingsState } from '.';

const domain = (state: RootState): SettingsState => state.settings || initialState;

export const selectAutosave = createSelector([domain], state => ({
  enabled: state.autosaveEnabled,
  frequencyMs: state.autosaveFrequencyMs,
}));

export type SelectAutosaveType = ReturnType<typeof selectAutosave>;
