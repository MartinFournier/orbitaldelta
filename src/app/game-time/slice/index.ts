import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { gameSpeeds } from '..';

export const initialState = {
  isPaused: false,
  currentTime: new Date(1959, 6, 8).getTime(),
  speedMultiplier: 1,
  activeDeltaMs: 0,
  pausedDeltaMs: 0,
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
      state.activeDeltaMs = 0;
    },
    incrementDeltaMs(state, action: PayloadAction<number>) {
      if (state.isPaused) {
        state.pausedDeltaMs = state.pausedDeltaMs + action.payload;
      } else {
        state.activeDeltaMs = state.activeDeltaMs + action.payload;
      }
    },
    setSpeedMultiplier(state, action: PayloadAction<number>) {
      state.speedMultiplier = action.payload;
    },
    setSpeedByIndex(state, action: PayloadAction<number>) {
      const value = gameSpeeds[action.payload];
      if (!value) return;
      state.speedMultiplier = value;
    },
    pauseGame(state) {
      state.isPaused = true;
    },
    unpauseGame(state) {
      state.isPaused = false;
    },
    togglePauseGame(state) {
      state.isPaused = !state.isPaused;
    },
    increaseSpeed(state) {
      const speedIndex = gameSpeeds.indexOf(state.speedMultiplier);
      if (speedIndex === -1 || speedIndex === gameSpeeds.length - 1) return;
      state.speedMultiplier = gameSpeeds[speedIndex + 1];
    },
    decreaseSpeed(state) {
      const speedIndex = gameSpeeds.indexOf(state.speedMultiplier);
      if (speedIndex === -1 || speedIndex === 0) return;
      state.speedMultiplier = gameSpeeds[speedIndex - 1];
    },
  },
});

export const { actions: gameTimeActions, reducer } = slice;
export default slice.reducer;
