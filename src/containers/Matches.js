import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

const Matches = () => {
  return (
    <div>
      <h1>Matches</h1>
    </div>
  );
};

Matches.defaultProps = {};
Matches.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Matches);
