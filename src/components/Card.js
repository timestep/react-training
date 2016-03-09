import React, { PropTypes } from 'react';

const style = {
  flex: 'auto',
};

const Card = ({ children }) => {
  return (
    <div style={ style }>
      { children }
    </div>
  );
};

Card.defaultName = 'Card';
Card.propTypes = {
  // ...
};
Card.defaultProps = {
  children: PropTypes.node,
};

export default Card;
