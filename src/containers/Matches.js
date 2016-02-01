import React, { PropTypes } from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';

import Container from '../components/Container';
import ProfileCard from '../components/ProfileCard';

function mapStateToProps(state) {
  return {
    matches: state.matches.get('result'),
    currentUserId: state.session.get('id'),
  };
}

function mapDispatchToProps() {
  return {};
}

const Matches = (props) => {
  const {
    currentUserId,
    matches,
  } = props;

  return (
    <Container className="left-align">
      {
        (() => {
          if (matches.size > 0) {
            return (
              matches.map((topic, idx) => {
                return (
                  <div key={ idx}>
                    <h4>{ topic.get('title') }</h4>
                    {
                      topic.get('yes')
                        .filter(i => i.id !== currentUserId)
                        .map((user, index) => {
                          return (
                            <ProfileCard
                              key={ index }
                              name={ user.get('displayName') } />
                          );
                        })
                    }
                  </div>
                );
              })
            );
          }

          return (
            <h2>No matches found! Check back soon!</h2>
          );
        })()
      }
    </Container>
  );
};

Matches.defaultProps = {};

Matches.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  matches: PropTypes.instanceOf(List).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Matches);
