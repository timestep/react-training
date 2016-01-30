import React, { PropTypes } from 'react';

const Label = ({ children }) => {
  return (
    <label className="bold">{ children }</label>
  );
};

Label.defaultProps = {};

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
