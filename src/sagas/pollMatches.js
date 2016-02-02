import { take, put, call } from 'redux-saga';

import { getMatches } from '../api/topics';

import {
  MATCHES_START_POLL,
  VIEW_LATEST_MATCHES,
  matchesPending,
  matchesSuccess,
  matchesError,
} from '../reducers/matches';

import {
  MARK_INTERESTED_SUCCESS,
  MARK_UNINTERESTED_SUCCESS,
} from '../reducers/topics';

const LONG_POLL_TIME = 120000;

const wait = ms => (
  new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  })
);

export function* pollMatches(getState) {
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

export function* updateMatches(getState) {
  const whitelist = [
    MARK_INTERESTED_SUCCESS,
    MARK_UNINTERESTED_SUCCESS,
    VIEW_LATEST_MATCHES,
  ];

  while (yield take(whitelist) ) {
    // Avoid duplicate calls if long poll happens at same time
    yield call(wait, 0);

    // Check to make sure we aren't already long polling for latest matches
    if (getState().matches.get('pending') === false) {
      yield put(matchesPending());

      try {
        const response = yield getMatches();

        yield put(matchesSuccess(response));
      } catch (e) {
        yield put(matchesError(error));
      }
    }
  }
}
