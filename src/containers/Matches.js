import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const Matches = () => {
  return (
    <div>
      <h1>Matches</h1>
    </div>
  );
}

Matches.defaultProps = {};

Matches.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Matches);
