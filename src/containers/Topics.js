import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

const Topics = () => {
  return (
    <div>
      <h1>Topics</h1>
    </div>
  );
};

Topics.defaultProps = {};
Topics.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Topics);
