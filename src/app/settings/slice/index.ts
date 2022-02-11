import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  autosaveEnabled: true,
  autosaveFrequencyMs: 1000 * 60 * 5,
};

export type SettingsState = typeof initialState;

export declare type AutosavePayload = Pick<SettingsState, 'autosaveEnabled'> & {
  autosaveFrequencyMinutes: number;
};

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeAutosave(state, action: PayloadAction<AutosavePayload>) {
      state.autosaveEnabled = action.payload.autosaveEnabled;
      state.autosaveFrequencyMs = action.payload.autosaveFrequencyMinutes * (1000 * 60);
    },
  },
});

export const { actions: settingsActions, reducer } = slice;
export default slice.reducer;
