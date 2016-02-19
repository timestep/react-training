import React from 'react';
import { connect } from 'react-redux';

import { createTopic } from '../reducers/topics';

import CreateTopicForm from '../components/CreateTopicForm';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onCreateTopic: (val) => dispatch(createTopic(val)),
  };
}

const Topics = ({ onCreateTopic }) => {
  return (
    <div className="p2 container">
      <CreateTopicForm onSubmit={ onCreateTopic }/>
    </div>
  );
};

Topics.defaultProps = {};
Topics.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Topics);
