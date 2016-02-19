import React, { PropTypes } from 'react';

const Row = ({ children }) => {
  return (
    <div className="clearfix mb2">
      { children }
    </div>
  );
};

Row.defaultProps = {};

Row.propTypes = {
  children: PropTypes.node,
};

export default Row;
