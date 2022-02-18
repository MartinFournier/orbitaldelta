import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist/lib/constants';

export const initialState = {
  username: 'test',
  lastProcessedOn: 0,
  processingDeltaMs: 0,
};

export type PlayerState = typeof initialState;

const slice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    markAsProcessed(state, action: PayloadAction<number>) {
      state.lastProcessedOn = action.payload;
      state.processingDeltaMs = 0;
    },
    incrementProcessingDeltaMs(state, action: PayloadAction<number>) {
      state.processingDeltaMs = state.processingDeltaMs + action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { actions: playerActions, reducer } = slice;
export default slice.reducer;
