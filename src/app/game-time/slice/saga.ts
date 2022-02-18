import { call, put, select, delay, takeLeading } from 'redux-saga/effects';
import { selectGameTime } from './selectors';
import { gameTimeActions, GameTimeState } from '.';
import { updateGameTime } from '..';
import { PayloadAction } from '@reduxjs/toolkit';

export function* process(action: PayloadAction<number>) {
  const gameTime: GameTimeState = yield select(selectGameTime);
  if (!gameTime.isPaused) {
    const newTime: number = yield call(
      updateGameTime,
      gameTime.currentTime,
      gameTime.speedMultiplier,
      gameTime.activeDeltaMs,
    );
    const now = performance.now();
    yield put(gameTimeActions.updateGameTime({ newTime, processedOn: now }));
  }
  yield delay(10);
}

export function* watchGameTimeProcess() {
  yield takeLeading(gameTimeActions.incrementDeltaMs.type, process);
}
