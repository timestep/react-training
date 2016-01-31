import React, { PropTypes } from 'react';
import classNames from 'classnames';

const FormError = ({ children, isVisible, style, className}) => {
  const classes = classNames({
    block: isVisible,
    hide: !isVisible,
  });

  return (
    <div
      className={ `${ className } bold ${ classes } black` }
      style={{ ...style }}>
      { children }
    </div>
  );
};

FormError.defaultProps = {
  style: {},
  className: '',
};

FormError.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormError;
