import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  requestTopics,
  markInterested,
  markUninterested,
} from '../reducers/topics';

import TopicCard from '../components/TopicCard';
import Container from '../components/Container';

function mapStateToProps(state) {
  return {
    isLoading: state.topics.get('pending'),
    latestCard: state.topics.get('result'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onComponentDidMount: () => dispatch(requestTopics()),
    onMarkInterested: (id) => dispatch(markInterested(id)),
    onMarkUninterested: (id) => dispatch(markUninterested(id)),
  };
}

class Home extends Component {
  componentDidMount() {
    this.props.onComponentDidMount();
  }

  render() {
    const {
      latestCard,
      isLoading,
      onMarkInterested,
      onMarkUninterested,
    } = this.props;

    return (
      <Container loading={ isLoading }>
        {
          (() => {
            if (latestCard) {
              return (
                <TopicCard
                  key={ latestCard.get('objectId') }
                  topic={ latestCard.get('title') }
                  description={ latestCard.get('description') }
                  onYes={ () => onMarkInterested(latestCard) }
                  onNo={ () => onMarkUninterested(latestCard) } />
              );
            }

            return (
              <h2>No new topics! Check back soon!</h2>
            );
          })()
        }
      </Container>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {
  latestCard: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  onMarkInterested: PropTypes.func.isRequired,
  onMarkUninterested: PropTypes.func.isRequired,
  onComponentDidMount: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
