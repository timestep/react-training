import { fromJS } from 'immutable';
import invariant from 'invariant';

import { VIEW_LATEST_MATCHES } from './matches';

export const CHANGE_MODAL = '@@reactTraining/CHANGE_MODAL';

const INITIAL_STATE = fromJS({
  modalVisible: 'login',
  lastViewedMatches: null,
});

function uiReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CHANGE_MODAL:
      return state.set('modalVisible', action.payload);

    case VIEW_LATEST_MATCHES:
      return state.set('lastViewedMatches', action.payload);

    default:
      return state;
  }
}

export function changeModal(id) {
  const whitelist = [
    'login',
    'signup',
  ];

  invariant(
    whitelist.some(i => id === i),
    `Invalid modal type provided to changeModal. It only accepts one of: ${ whitelist }`
  );

  return { type: CHANGE_MODAL, payload: id };
}

export default uiReducer;
