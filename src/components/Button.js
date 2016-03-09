import React, { PropTypes } from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>{children}</button>
  );
};

Button.defaultName = 'Button';
Button.propTypes = {
  /**
   * The children of the component to render
   */
  children: PropTypes.node,
  onClick: PropTypes.function,
};
Button.defaultProps = {};

export default Button;
