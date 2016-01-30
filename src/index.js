import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from './reducers/index';

import thunk from 'redux-thunk';
import logger from './middleware/logger';

// Configure our store
const store = compose(
  applyMiddleware(
    thunk,
    logger,
  ),
  window.devToolsExtension ? window.devToolsExtension() : () => {},
)(createStore)(combineReducers(reducers), {});

import KitchenSink from './containers/KitchenSink';

ReactDOM.render(
  <Provider store={ store }>
    <KitchenSink />
  </Provider>,
  document.getElementById('root')
);
