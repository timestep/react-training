import { fromJS } from 'immutable';
import invariant from 'invariant';

export const CHANGE_MODAL = '@@reactTraining/CHANGE_MODAL';
export const HIDE_MODAL = '@@reactTraining/HIDE_MODAL';

const INITIAL_STATE = fromJS({
  visible: 'login',
});

function modalReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CHANGE_MODAL:
      return state.set('visible', action.payload);

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

export default modalReducer;
