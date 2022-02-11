import { select, delay, putResolve } from 'redux-saga/effects';
import { saveGame } from '.';
import {
  selectAutosave,
  SelectAutosaveType,
} from 'app/settings/slice/selectors';
import { persistor } from 'store';

export function* autosave() {
  while (true) {
    const autosave: SelectAutosaveType = yield select(selectAutosave);
    yield delay(autosave.frequencyMs);
    if (autosave.enabled) {
      yield putResolve(saveGame(persistor.flush) as never);
    }
  }
}
