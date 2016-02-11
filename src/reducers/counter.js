export const INCREASE = '@@reactTraining/INCREASE';
export const DECREASE = '@@reactTraining/DECREASE';

const INITIAL_STATE = 0;

function counterReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case INCREASE:
      return state + 1;

    case DECREASE:
      return state - 1;

    default:
      return state;
  }
}

export function increase() {
  return { type: INCREASE };
}

export function decrease() {
  return { type: DECREASE };
}

export default counterReducer;
