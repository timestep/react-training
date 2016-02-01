import { take, put, call } from 'redux-saga';

import { getMatches } from '../api/topics';
import {
  MATCHES_START_POLL,
  matchesPending,
  matchesSuccess,
  matchesError,
} from '../reducers/matches';

const LONG_POLL_TIME = 120000;

const wait = ms => (
  new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  })
);

function* pollMatches(getState) {
  while (yield take(MATCHES_START_POLL) ) {
    while (true) {
      if (
        getState().matches.get('polling') &&
        getState().session.get('authenticated')
      ) {
        yield put(matchesPending());

        try {
          const response = yield getMatches();

          yield put(matchesSuccess(response));
        } catch (e) {
          yield put(matchesError(error));
        }
      } else {
        break;
      }

      yield call(wait, LONG_POLL_TIME);
    }
  }
}

export default pollMatches;
