import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist/lib/constants';
import { gameSpeeds } from '..';

export const initialState = {
  isPaused: false,
  isTurboing: false,
  currentTime: new Date(1959, 6, 8).getTime(),
  speedMultiplier: 1,
  activeDeltaMs: 0,
  turboDeltaMs: 0,
  lastProcessedOn: 0,
};

export type GameTimeState = typeof initialState;

export type UpdateTimePayload = {
  newTime: number;
  consumedTurboDeltaMs: number;
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
      state.turboDeltaMs -= action.payload.consumedTurboDeltaMs;
      if (state.turboDeltaMs <= 0) {
        state.isTurboing = false;
      }
    },
    incrementDeltaMs(state, action: PayloadAction<number>) {
      const delta = action.payload;
      if (state.isPaused) {
        state.turboDeltaMs = state.turboDeltaMs + delta;
      } else {
        state.activeDeltaMs = state.activeDeltaMs + delta;
      }
    },
    incrementTurboDeltaMs(state, action: PayloadAction<number>) {
      state.turboDeltaMs = state.turboDeltaMs + action.payload;
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
    toggleTurbo(state) {
      state.isTurboing = !state.isTurboing;
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
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { actions: gameTimeActions, reducer } = slice;
export default slice.reducer;
