import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

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

const rootReducer = combineReducers({ counter: counterReducer });
const store = createStore(rootReducer);

store.subscribe(() => {
  ReactDOM.render(
    <div>
      <pre>{ JSON.stringify(store.getState(), null, 2) }</pre>
      <button onClick={ () => store.dispatch(increase()) }>Increase</button>
      <button onClick={ () => store.dispatch(decrease()) }>Decrease</button>
    </div>,
    document.getElementById('root')
  );
});

store.dispatch({ type: 'INIT' });
