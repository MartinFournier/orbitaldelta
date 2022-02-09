import { call, put, select, delay, takeLeading } from 'redux-saga/effects';
import { selectPlayer } from './selectors';
import { playerActions } from '.';
import { updatePlayer as processPlayer } from '..';
import { PlayerState } from './types';
import { createAction, PayloadAction } from '@reduxjs/toolkit';

export const playerUpdateSaga = createAction<number>('player/playerUpdate');

export function* process(action: PayloadAction<number>) {
  const player: PlayerState = yield select(selectPlayer);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const updatedPlayer: PlayerState = yield call(processPlayer, player, player.processingDeltaMs);
  // if lastUpdated > new value, abort
  // calculate duration increment
  yield put(playerActions.changeLastProcessed(new Date().getTime()));
  yield delay(10000);
}

export function* watchPlayerProcess() {
  yield takeLeading(playerActions.incrementProcessingDeltaMs.type, process);
}
