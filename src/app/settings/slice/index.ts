import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist/lib/constants';

export const initialState = {
  autosaveEnabled: true,
  autosaveFrequencyMs: 1000 * 60 * 5,
  sidebarCollapsed: false,
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
      state.autosaveFrequencyMs =
        action.payload.autosaveFrequencyMinutes * (1000 * 60);
    },
    changeSidebarCollapsed(state, action: PayloadAction<boolean>) {
      state.sidebarCollapsed = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { actions: settingsActions, reducer } = slice;
export default slice.reducer;
