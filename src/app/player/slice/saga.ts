import { call, put, select, delay, takeLeading } from 'redux-saga/effects';
import { selectPlayer } from './selectors';
import { playerActions, PlayerState } from '.';
import { updatePlayer as processPlayer } from '..';
import { PayloadAction } from '@reduxjs/toolkit';
import { updateRates } from 'app/engine/updateRates';
import { gameTimeActions, UpdateTimePayload } from 'app/game-time/slice';

export function* process(action: PayloadAction<UpdateTimePayload>) {
  const { newTime } = action.payload;
  if (!newTime || isNaN(newTime)) return;

  const player: PlayerState = yield select(selectPlayer);
  const delta = newTime - player.processedOn;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const updatedPlayer: PlayerState = yield call(processPlayer, player, delta);
  // if lastUpdated > new value, abort
  // calculate duration increment
  yield put(playerActions.markAsProcessed(newTime));
  yield delay(updateRates.playerRate);
}

export function* watchPlayerProcess() {
  yield takeLeading(gameTimeActions.updateGameTime.type, process);
}
