import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';

import {
  requestTopics, markInterested, markUninterested } from '../reducers/topics';

import TopicCard from '../components/TopicCard';
import Container from '../components/Container';
import Debug from '../components/Debug';

function mapStateToProps(state) {
  const userId = state.session.get('id');
  return {
    isLoading: state.topics.get('pending'),
    cards: state.topics.get('result').filter(i => {
      // Filter to only show cards the user has not interacted with
      return !i.get('yes').includes(userId) &&
             !i.get('no').includes(userId)
    }).toList(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onComponentDidMount: () => dispatch(requestTopics()),
    markInterested: (id) => dispatch(markInterested(id)),
    markUninterested: (id) => dispatch(markUninterested(id)),
  };
}

class Home extends Component {
  componentDidMount() {
    this.props.onComponentDidMount();
  }

  render() {
    const {
      cards,
      isLoading,
      markInterested,
      markUninterested,
    } = this.props;

    return (
      <Container loading={ isLoading }>
        {
          cards.map(i => {
            return (
              <TopicCard
                key={ i.get('id') }
                topic={ i.get('title') }
                onYes={ () => markInterested(i.get('id')) }
                onNo={ () => markUninterested(i.get('id')) } />
            );
          })
        }
      </Container>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {
  cards: PropTypes.instanceOf(List).isRequired,
  isLoading: PropTypes.bool.isRequired,
  markInterested: PropTypes.func.isRequired,
  markUninterested: PropTypes.func.isRequired,
  onComponentDidMount: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
