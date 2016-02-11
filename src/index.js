import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from './reducers/index';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, {});

import App from './containers/App';

ReactDOM.render(
  <Provider store={ store }>
    <KitchenSink />
  </Provider>,
  document.getElementById('root')
);
