import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Button = (props) => {
  const {
    children,
    onClick,
    disabled,
    type,
    className,
  } = props;

  const classes = classNames('btn', 'btn-primary', className);

  return (
    <button
      disabled={ disabled }
      onClick={ onClick }
      type={ type }
      className={ classes }>
      { children }
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  type: 'button',
  className: ''
};

export default Button;
