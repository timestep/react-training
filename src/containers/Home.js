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
  const userId = state.session.get('id');

  return {
    isLoading: state.topics.get('pending'),
    latestCard: state.topics.get('result'),
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
      latestCard,
      isLoading,
      markInterested,
      markUninterested,
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
                  onYes={ () => markInterested(latestCard) }
                  onNo={ () => markUninterested(latestCard) } />
              );
            } else {
              return (
                <h2>No new topics!</h2>
              );
            }
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
  markInterested: PropTypes.func.isRequired,
  markUninterested: PropTypes.func.isRequired,
  onComponentDidMount: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
