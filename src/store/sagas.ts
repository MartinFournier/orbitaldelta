import { all, call, spawn } from 'redux-saga/effects';

import { watchPlayerProcess } from 'app/components/Player/slice/saga';

export default function* rootSaga() {
  const sagas = [watchPlayerProcess];

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
