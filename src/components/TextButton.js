import React, { PropTypes } from 'react';
import classNames from 'classnames';

const TextButton = (props) => {
  const {
    children,
    className,
    onClick,
    style,
  } = props;

  const classes = classNames('btn', className);

  return (
    <a
      style={ style }
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      href
      className={ classes }>
      { children }
    </a>
  );
};

TextButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

TextButton.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
};

export default TextButton;
