import { all, call, spawn } from 'redux-saga/effects';

import { autosave, watchEngineRehydrate } from 'app/engine/slice/saga';
import { watchGameTimeProcess } from 'app/game-time/slice/saga';
import { watchPlayerProcess } from 'app/player/slice/saga';

export default function* rootSaga() {
  const sagas = [
    autosave,
    watchGameTimeProcess,
    watchEngineRehydrate,
    watchPlayerProcess,
  ];

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
