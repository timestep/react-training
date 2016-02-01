import { fromJS } from 'immutable';

import * as topics from '../api/topics';

export const TOPICS_LOADING = '@@reactTraining/TOPICS_LOADING';
export const REQUEST_TOPICS_SUCCESS = '@@reactTraining/REQUEST_TOPICS_SUCCESS';
export const REQUEST_TOPICS_ERROR = '@@reactTraining/REQUEST_TOPICS_ERROR';
export const MARK_INTERESTED = '@@reactTraining/MARK_INTERESTED';
export const MARK_UNINTERESTED = '@@reactTraining/MARK_UNINTERESTED';

const INITIAL_STATE = fromJS({
  pending: false,
  hasError: false,
  result: null,
});

function topicsReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case TOPICS_LOADING:
      return state.set('pending', true)
                  .set('hasError', false);

    case REQUEST_TOPICS_SUCCESS:
      return state.merge(fromJS({
        pending: false,
        result: action.payload,
      }));

    case REQUEST_TOPICS_ERROR:
      return state.set('hasError', true)
                  .set('pending', false);

    default:
      return state;
  }
}

function requestTopicsPending() {
  return { type: TOPICS_LOADING };
}

function requestTopicsSuccess(res) {
  return { type: REQUEST_TOPICS_SUCCESS, payload: res };
}

function requestTopicsError(err) {
  return { type: REQUEST_TOPICS_ERROR, payload: err };
}

export function requestTopics() {
  return (dispatch) => {
    dispatch(requestTopicsPending());

    return topics.get()
      .then(res => dispatch(requestTopicsSuccess(res)))
      .then(null, err => dispatch(requestTopicsError(err)));
  };
}

export function markInterested(card) {
  return (dispatch) => {
    dispatch(requestTopicsPending());

    topics.markInterested(card)
      .then(() => topics.get())
      .then(res => dispatch(requestTopicsSuccess(res)))
      .then(null, err => dispatch(requestTopicsError(err)));
  };
}

export function markUninterested(card) {
  return (dispatch) => {
    dispatch(requestTopicsPending());

    topics.markUninterested(card)
      .then(() => topics.get())
      .then(res => dispatch(requestTopicsSuccess(res)))
      .then(null, err => dispatch(requestTopicsError(err)));
  };
}

export default topicsReducer;
