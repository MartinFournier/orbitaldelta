import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
  gameSavedOn: 0,
  isGameSaving: false,
};

export type EngineState = typeof initialState;

export const saveGame = createAsyncThunk('engine/saveGame', async (saveFn: () => Promise<unknown>) => {
  await saveFn();
  return {
    completedOn: new Date().getTime(),
  };
});

const slice = createSlice({
  name: 'engine',
  initialState,
  reducers: {},
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

export const { actions: engineAction, reducer } = slice;

export default slice.reducer;
