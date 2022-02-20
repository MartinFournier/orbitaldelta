import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist/lib/constants';
import { sleep } from 'utilities/dev';

export const initialState = {
  gameSavedOn: 0,
  isGameSaving: false,
  showEngineStats: false,
};

export type EngineState = typeof initialState;

export const saveGame = createAsyncThunk(
  'engine/saveGame',
  async (saveFn: () => Promise<unknown>) => {
    const then = performance.now();
    await saveFn();
    const now = performance.now();
    const timeElapsed = now - then;
    if (timeElapsed < 1000) {
      // We want a fake loading time so the action is visible.
      await sleep(1000 - timeElapsed);
    }
    return {
      completedOn: new Date().getTime(),
    };
  },
);

const slice = createSlice({
  name: 'engine',
  initialState,
  reducers: {
    changeShowEngineStats(state, action: PayloadAction<boolean>) {
      state.showEngineStats = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(saveGame.pending, state => {
      state.isGameSaving = true;
      state.gameSavedOn = new Date().getTime();
    });
    builder.addCase(saveGame.fulfilled, (state, action) => {
      state.isGameSaving = false;
    });
    builder.addCase(PURGE, () => initialState);
  },
});

export const {
  actions: { ...engineAction },
  reducer,
} = slice;

export default slice.reducer;
