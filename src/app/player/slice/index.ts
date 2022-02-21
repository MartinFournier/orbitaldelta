import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { gameStartTime } from 'app/game-time';
import { PURGE } from 'redux-persist/lib/constants';

export const initialState = {
  username: 'test',
  processedOn: gameStartTime,
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
      state.processedOn = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { actions: playerActions, reducer } = slice;
export default slice.reducer;
