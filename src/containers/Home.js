import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createTopic, retrieveItems } from '../reducers/topics';

import CreateTopicForm from '../components/CreateTopicForm';

function mapStateToProps(state) {
  return {
    topics: state.topics.get('topics'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCreateTopic: (val) => dispatch(createTopic(val)),
    onRetrieveItems: () => dispatch(retrieveItems()),
  };
}

class Home extends Component {
  componentDidMount() {
    this.props.onRetrieveItems();
  }

  render() {
    const {
      onCreateTopic,
      topics,
    } = this.props;

    return (
      <div>
        <CreateTopicForm
          onSubmit={ onCreateTopic }/>
        <ul>
          {
            topics.map(i => {
              return (
                <li>{ i.get('title') }</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

Home.defaultProps = {};
Home.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
