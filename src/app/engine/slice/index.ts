import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
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
    const then = new Date().getTime();
    await saveFn();
    const now = new Date().getTime();
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
    });
    builder.addCase(saveGame.fulfilled, (state, action) => {
      state.isGameSaving = false;
      state.gameSavedOn = action.payload.completedOn;
    });
  },
});

export const {
  actions: { ...engineAction },
  reducer,
} = slice;

export default slice.reducer;
