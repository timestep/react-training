import React, { PropTypes, Component } from 'react';

class StatefulComponent extends Component {
  constructor(props) {
    super();

    this.state = {
      isLiked: props.liked,
    };
  }

  componentDidMount() {
    console.info('StatefulComponent successfully mounted.');
  }

  _toggleLikeState() {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  }

  render() {
    return (
      <div>
        <span>{ this.state.isLiked ? '👍' : '👎' }</span>

        <button onClick={ this._toggleLikeState.bind(this) }>
          Toggle Like
        </button>
      </div>
    );
  }
}

StatefulComponent.propTypes = {
  /**
   * The initial state of the liked value
   */
  liked: PropTypes.bool,
};
StatefulComponent.defaultProps = {
  liked: false,
};

export default StatefulComponent;
