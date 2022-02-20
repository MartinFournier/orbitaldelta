import { call, put, select, delay, takeLeading } from 'redux-saga/effects';
import { selectPlayer } from './selectors';
import { playerActions, PlayerState } from '.';
import { updatePlayer as processPlayer } from '..';
import { PayloadAction } from '@reduxjs/toolkit';
import { updateRates } from 'app/engine/updateRates';

export function* process(action: PayloadAction<number>) {
  const player: PlayerState = yield select(selectPlayer);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const updatedPlayer: PlayerState = yield call(
    processPlayer,
    player,
    player.processingDeltaMs,
  );
  // if lastUpdated > new value, abort
  // calculate duration increment
  const now = new Date().getTime();
  yield put(playerActions.markAsProcessed(now));
  yield delay(updateRates.playerRate);
}

export function* watchPlayerProcess() {
  yield takeLeading(playerActions.incrementProcessingDeltaMs.type, process);
}
