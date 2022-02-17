import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  currentTime: new Date(1959, 6, 8).getTime(),
  speedMultiplier: 1,
  processingDeltaMs: 0,
  lastProcessedOn: 0,
};

export type GameTimeState = typeof initialState;

export type UpdateTimePayload = {
  newTime: number;
  processedOn: number;
};

const slice = createSlice({
  name: 'gameTime',
  initialState,
  reducers: {
    updateGameTime(state, action: PayloadAction<UpdateTimePayload>) {
      state.currentTime = action.payload.newTime;
      state.lastProcessedOn = action.payload.processedOn;
      state.processingDeltaMs = 0;
    },
    incrementProcessingDeltaMs(state, action: PayloadAction<number>) {
      state.processingDeltaMs = state.processingDeltaMs + action.payload;
    },
  },
});

export const { actions: gameTimeActions, reducer } = slice;
export default slice.reducer;
