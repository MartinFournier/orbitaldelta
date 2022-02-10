import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PlayerState } from './types';

export const initialState: PlayerState = {
  username: 'test',
  lastProcessedOn: 0,
  processingDeltaMs: 0,
};

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
