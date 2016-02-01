import React, { PropTypes } from 'react';
import classNames from 'classnames';

const color = {
  info: 'bg-blue white',
  warning: 'bg-yellow black',
  success: 'bg-green white',
  error: 'bg-red white',
};

const Alert = ({ children, isVisible, status, className, style }) => {
  const classes = classNames({
    block: isVisible,
    hide: !isVisible,
  });

  return (
    <div
      className={ `${ className } p2 bold ${ classes } ${ color[status] }` }
      style={{ ...style }}>
      { children }
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  status: PropTypes.oneOf(['info', 'warning', 'success', 'error']).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Alert.defaultProps = {
  status: 'info',
  className: '',
  style: {},
};

export default Alert;
