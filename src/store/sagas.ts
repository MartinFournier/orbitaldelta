import { all, call, spawn } from 'redux-saga/effects';

import { watchPlayerProcess } from 'app/player/slice/saga';
import { autosave } from 'app/engine/slice/saga';

export default function* rootSaga() {
  const sagas = [watchPlayerProcess, autosave];

  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(e);
          }
        }
      }),
    ),
  );
}
