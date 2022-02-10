import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
    changeLastProcessed(state, action: PayloadAction<number>) {
      state.lastProcessedOn = action.payload;
    },
    incrementProcessingDeltaMs(state, action: PayloadAction<number>) {
      state.processingDeltaMs = state.processingDeltaMs + action.payload;
    },
  },
});

export const { actions: playerActions, reducer } = slice;
export default slice.reducer;
