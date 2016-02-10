import React, { PropTypes } from 'react';

const Stateless = ({ children }) => {
  return (
    <div className="p2 mb4 bg-red white border">
      { children }
    </div>
  );
};

Stateless.defaultName = 'Stateless';
Stateless.propTypes = {
  /**
   * The children of the component to render
   */
  children: PropTypes.node,
};
Stateless.defaultProps = {};

export default Stateless;
