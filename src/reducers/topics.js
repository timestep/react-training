import { fromJS } from 'immutable';

import { get, create } from '../api/item';

export const CREATE_TOPIC_PENDING = '@@reactTraining/CREATE_TOPIC_PENDING';
export const CREATE_TOPIC_SUCCESS = '@@reactTraining/CREATE_TOPIC_SUCCESS';
export const CREATE_TOPIC_ERROR = '@@reactTraining/CREATE_TOPIC_ERROR';
export const RETRIEVE_ITEMS_PENDING = '@@reactTraing/RETRIEVE_ITEMS_PENDING';
export const RETRIEVE_ITEMS_SUCCESS = '@@reactTraing/RETRIEVE_ITEMS_SUCCESS';
export const RETRIEVE_ITEMS_ERROR = '@@reactTraing/RETRIEVE_ITEMS_ERROR';

const INITIAL_STATE = fromJS({
  isLoading: false,
  hasError: false,
  topics: [],
});

function topicReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CREATE_TOPIC_SUCCESS:
      return state.updateIn(
        ['topics'],
        i => i.push(fromJS(action.payload))
      );

    case CREATE_TOPIC_PENDING:
    case RETRIEVE_ITEMS_PENDING:
      return state.set('isLoading', true);

    case RETRIEVE_ITEMS_SUCCESS:
      return state.merge(fromJS({
        topics: action.payload,
        isLoading: false,
      }));

    case CREATE_TOPIC_ERROR:
    case RETRIEVE_ITEMS_ERROR:
      return state.merge(fromJS({
        isLoading: false,
        hasError: true,
      }));

    default:
      return state;
  }
}

export function createTopic({ title, description }) {
  return (dispatch, getState) => {
    dispatch({ type: CREATE_TOPIC_PENDING });

    return create(title, description)
      .then((payload) => {
        dispatch({ type: CREATE_TOPIC_SUCCESS, payload });
        dispatch(retrieveItems());
      })
      .catch((payload) => dispatch({ type: CREATE_TOPIC_ERROR, payload }));
  };
}

export function retrieveItems(query) {
  return (dispatch, getState) => {
    dispatch({ type: RETRIEVE_ITEMS_PENDING });

    return get()
      .then((payload) => dispatch({ type: RETRIEVE_ITEMS_SUCCESS, payload }))
      .catch((payload) => dispatch({ type: RETRIEVE_ITEMS_ERROR, payload }));
  };
}

export default topicReducer;
