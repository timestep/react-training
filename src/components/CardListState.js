import React, { PropTypes, Component } from 'react';
import CardList from './CardList';
import Button from './Button';

class CardListState extends Component {
  constructor({dishonored, profiles}) {
    super();

    this.state = {
      dishonored: dishonored,
      profiles: profiles.map((profile) => {
        return {onClick: () => {
          this.setState({
            dishonored: [...this.state.dishonored, profile.id],
          });
        }, ...profile};
      }),
    };
  }

  render() {
    return (
      <dive>
      <Button onClick={ this.undo }>Undo</Button>
      <CardList profiles={ this.state.profiles.filter((profile) => this.state.dishonored.indexOf(profile.id) < 0) }/>
      </dive>
    );
  }

  undo = () => {
    this.setState({
      dishonored: this.state.dishonored.slice(0, this.state.dishonored.length - 1),
    });
  };
}

/**
 * We use proptypes to define our interface. These are important, we should
 * always build our components so that they accept the minimal about of data
 * required to render.
 *
 * For more information on PropTypes validation, see:
 * https://facebook.github.io/react/docs/reusable-components.html
 */
CardListState.propTypes = {
  /**
   * The initial state of the liked value
   */
  liked: PropTypes.bool,
};
CardListState.defaultProps = {
  liked: false,
};

export default CardListState;
