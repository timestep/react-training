import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Button = (props) => {
  const {
    children,
    className,
    disabled,
    onClick,
    style,
    type,
  } = props;

  const classes = classNames('btn', 'btn-primary', className);

  return (
    <button
      style={ style }
      disabled={ disabled }
      onClick={ onClick }
      type={ type }
      className={ classes }>
      { children }
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  className: '',
  disabled: false,
  onClick: () => {},
  style: {},
  type: 'button',
};

export default Button;
