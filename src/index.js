import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import * as reducers from './reducers/index';
import { startMatchesPolling, stopMatchesPolling } from './reducers/matches';

import thunk from 'redux-thunk';
import sagaMiddleware from 'redux-saga';
import logger from './middleware/logger';

import pollMatches from './sagas/pollMatches';

import KitchenSink from './containers/KitchenSink';
import Navigator from './containers/Navigator';
import Home from './containers/Home';
import Matches from './containers/Matches';
import Topics from './containers/Topics';

// Configure our reducer
const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer,
  form: formReducer,
}));

// Syncs route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);

// Configure our store
const store = compose(
  applyMiddleware(
    reduxRouterMiddleware,
    thunk,
    sagaMiddleware(pollMatches),
    logger,
  ),
  window.devToolsExtension ? window.devToolsExtension() : () => {},
)(createStore)(reducer, {});

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

store.subscribe(() => {
  const state = store.getState();
  const dispatch = store.dispatch;
  const authenticated = state.session.get('authenticated');
  const polling = state.matches.get('polling');

  if (!polling && authenticated) {
    dispatch(startMatchesPolling());
  }

  if (polling && !authenticated) {
    dispatch(stopMatchesPolling());
  }
});

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route component={ Navigator }>
        <Route path="/" component={ Home }/>
        <Route path="matches" component={ Matches }/>
        <Route path="topics" component={ Topics }/>
      </Route>
      <Route path="sink" component={ KitchenSink }/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
