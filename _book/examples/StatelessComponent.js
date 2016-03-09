import React, { PropTypes } from 'react';

const StatelessComponent = ({ children }) => {
  return (
    <div className="p2 mb4 bg-red white border">
      { children }
    </div>
  );
};

StatelessComponent.defaultName = 'StatelessComponent';
StatelessComponent.propTypes = {
  /**
   * The children of the component to render
   */
  children: PropTypes.node,
};
StatelessComponent.defaultProps = {};

export default StatelessComponent;
