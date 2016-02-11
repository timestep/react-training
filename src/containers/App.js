import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increase, decrease } from '../reducers/counter';

import Button from '../components/Button';

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrease: () => dispatch(increase()),
    onDecrease: () => dispatch(decrease()),
  };
}

const App = ({ onIncrease, onDecrease, counter }) => {
  return (
    <div>
      <h1>{ counter }</h1>

      <Button onClick={ onIncrease }>Increase</Button>
      <Button onClick={ onDecrease } status="danger">Decrease</Button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
