import React, { PropTypes, Component } from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';

import { viewMatches } from '../reducers/matches';

import Container from '../components/Container';
import ProfileCard from '../components/ProfileCard';

function mapStateToProps(state) {
  return {
    matches: state.matches.get('result'),
    currentUserId: state.session.get('id'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onViewMatches: () => dispatch(viewMatches()),
  };
}

class Matches extends Component {
  componentDidMount() {
    this.props.onViewMatches();
  }

  render() {
    const {
      currentUserId,
      matches,
    } = this.props;

    return (
      <Container className="left-align">
        {
          (() => {
            if (matches.size > 0) {
              return (
                matches.map((topic, idx) => {
                  return (
                    <div className="mb3" key={ idx}>
                      <h4>{ topic.get('title') }</h4>
                      {
                        (() => {
                          const results = topic.get('yes')
                            .filter(i => i.id !== currentUserId);

                          if (results.length === 0) {
                            return (
                              <div className="p2 mb1 border flex">
                                Nobody matched... yet!
                              </div>
                            );
                          }

                          return results.map((user, index) => {
                            return (
                              <ProfileCard
                                key={ index }
                                name={ user.get('displayName') } />
                            );
                          });
                        })()
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
  }
}

Matches.defaultProps = {};

Matches.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  matches: PropTypes.instanceOf(List).isRequired,
  onViewMatches: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Matches);
