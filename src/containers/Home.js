import React from 'react';
import { connect } from 'react-redux';

import CreateTopicForm from '../components/CreateTopicForm';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

const Home = () => {
  return (
    <div>
      <CreateTopicForm />
    </div>
  );
};

Home.defaultProps = {};
Home.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
