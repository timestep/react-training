import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTopic, retrieveItems } from '../reducers/topics';

import ProfileCard from '../components/ProfileCard';
import CreateTopicForm from '../components/CreateTopicForm';

function mapStateToProps(state) {
  return {
    topics: state.topics.get('topics'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRetrieveItems: () => dispatch(retrieveItems()),
  };
}

class Home extends Component {
  componentDidMount() {
    this.props.onRetrieveItems();
  }

  render() {
    const { topics } = this.props;

    return (
      <div className="p2 container">
        {
          topics.map((i, idx) => {
            return (
              <ProfileCard
                key={ idx }
                name={ i.get('title') }
                topics={ i.get('description') } />
            );
          })
        }
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
