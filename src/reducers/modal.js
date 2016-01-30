import { fromJS } from 'immutable';

export const SHOW_MODAL = '@@reactTraining/SHOW_MODAL';
export const HIDE_MODAL = '@@reactTraining/HIDE_MODAL';

const INITIAL_STATE = fromJS({
  isVisible: false,
});

function modalReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SHOW_MODAL:
      return state.set('isVisible', true);

    case HIDE_MODAL:
      return state.set('isVisible', false);

    default:
      return state;
  }
}

export function showModal() {
  return { type: SHOW_MODAL };
}

export function hideModal() {
  return { type: HIDE_MODAL };
}

export default modalReducer;
