import { put, select, delay, takeLeading } from 'redux-saga/effects';
import { selectGameTime } from './selectors';
import { gameTimeActions, GameTimeState } from '.';
import { PayloadAction } from '@reduxjs/toolkit';

const boostMs = 100;

export function* process(action: PayloadAction<number>) {
  const gameTime: GameTimeState = yield select(selectGameTime);
  if (!gameTime.isPaused) {
    const activeIncrement = gameTime.activeDeltaMs * gameTime.speedMultiplier;
    let turboIncrement = gameTime.isTurboing
      ? boostMs * gameTime.speedMultiplier
      : 0;

    if (turboIncrement > gameTime.turboDeltaMs)
      turboIncrement = gameTime.turboDeltaMs;

    const newTime = gameTime.currentTime + activeIncrement + turboIncrement;
    const now = new Date().getTime();

    yield put(
      gameTimeActions.updateGameTime({
        newTime,
        consumedTurboDeltaMs: turboIncrement,
        processedOn: now,
      }),
    );
  }
  yield delay(50);
}

export function* watchGameTimeProcess() {
  yield takeLeading(gameTimeActions.incrementDeltaMs.type, process);
}
