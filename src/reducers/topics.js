import { fromJS } from 'immutable';

import { getTopics } from '../api/topics';

export const REQUEST_TOPICS_PENDING = '@@reactTraining/REQUEST_TOPICS_PENDING';
export const REQUEST_TOPICS_SUCCESS = '@@reactTraining/REQUEST_TOPICS_SUCCESS';
export const REQUEST_TOPICS_ERROR = '@@reactTraining/REQUEST_TOPICS_ERROR';
export const MARK_INTERESTED = '@@reactTraining/MARK_INTERESTED';
export const MARK_UNINTERESTED = '@@reactTraining/MARK_UNINTERESTED';

const INITIAL_STATE = fromJS({
  pending: false,
  hasError: false,
  result: [],
});

function topicsReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case REQUEST_TOPICS_PENDING:
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

    case MARK_INTERESTED:
      return state.updateIn(
        ['result', action.payload.id, 'yes'],
        i => i.push(action.payload.userId)
      );

    case MARK_UNINTERESTED:
      return state.updateIn(
        ['result', action.payload.id, 'no'],
        i => i.push(action.payload.userId)
      );

    default:
      return state;
  }
}

export function requestTopics() {
  return (dispatch, getState) => {
    if (getState().topics.get('result').size > 0) {
      return false;
    }

    dispatch({ type: REQUEST_TOPICS_PENDING });

    return getTopics()
      .then(res => dispatch({ type: REQUEST_TOPICS_SUCCESS, payload: res }))
      .then(null, () => dispatch({ type: REQUEST_TOPICS_ERROR }));
  };
}

export function markInterested(id) {
  return (dispatch, getState) => {
    return dispatch({
      type: MARK_INTERESTED,
      payload: {
        userId: getState().session.get('id'),
        id,
      },
    });
  };
}

export function markUninterested(id) {
  return (dispatch, getState) => {
    return dispatch({
      type: MARK_UNINTERESTED,
      payload: {
        userId: getState().session.get('id'),
        id,
      },
    });
  };
}

export default topicsReducer;
