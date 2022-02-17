import { call, put, select, delay, takeLeading } from 'redux-saga/effects';
import { selectGameTime } from './selectors';
import { gameTimeActions, GameTimeState } from '.';
import { updateGameTime } from '..';
import { createAction, PayloadAction } from '@reduxjs/toolkit';

// export const gametimeUpdateSaga = createAction<number>('gameTime/update');

export function* process(action: PayloadAction<number>) {
  const gameTime: GameTimeState = yield select(selectGameTime);
  const newTime: number = yield call(
    updateGameTime,
    gameTime.currentTime,
    gameTime.speedMultiplier,
    gameTime.processingDeltaMs,
  );
  const now = new Date().getTime();
  yield put(gameTimeActions.updateGameTime({ newTime, processedOn: now }));
  yield delay(10_000);
}

export function* watchGameTimeProcess() {
  yield takeLeading(gameTimeActions.incrementProcessingDeltaMs.type, process);
}
