import React, { PropTypes } from 'react';

const Label = ({ key, children }) => {
  return (
    <label className="bold mb1" htmlFor={ key }>
      { children }
    </label>
  );
};

Label.defaultName = 'Label';
Label.propTypes = {
  /**
   * The children to be rendered by label
   */
  children: PropTypes.node,
  /**
   * The key for the label to target
   */
  key: PropTypes.string,
};
Label.defaultProps = {
  key: '',
};

export default Label;
