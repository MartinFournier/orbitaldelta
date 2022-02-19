import { select, delay, putResolve, takeEvery, put } from 'redux-saga/effects';
import { saveGame } from '.';
import {
  selectAutosave,
  SelectAutosaveType,
} from 'app/settings/slice/selectors';
import { persistor } from 'store';
import { notifications } from 'app/common/Toasts';
import { REHYDRATE } from 'redux-persist/lib/constants';
import { selectGameSavedOn } from './selectors';
import { gameTimeActions } from 'app/game-time/slice';

export function* autosave() {
  while (true) {
    const autosave: SelectAutosaveType = yield select(selectAutosave);
    yield delay(autosave.frequencyMs);
    if (autosave.enabled) {
      yield putResolve(saveGame(persistor.flush) as never);
      notifications.gameSaved();
    }
  }
}

export function* processOfflineTime() {
  const lastSavedOn: number = yield select(selectGameSavedOn);
  const now = new Date().getTime();
  const offlineTime = now - lastSavedOn;
  yield put(gameTimeActions.incrementTurboDeltaMs(offlineTime));
  notifications.addedOfflineTime(offlineTime);
}

export function* watchEngineRehydrate() {
  yield takeEvery(REHYDRATE, processOfflineTime);
}
