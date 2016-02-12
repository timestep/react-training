import React, { PropTypes } from 'react';

const buttonStatus = {
  success: 'bg-green',
  warning: 'bg-orange',
  primary: 'bg-blue',
  danger: 'bg-red',
};

const Button = ({ children, type, onClick, disabled,  status }) => {
  return (
    <button
      onClick={ onClick }
      type={ type }
      disabled={ disabled }
      className={ `btn btn-primary white ${ buttonStatus[status] }` }>
      { children }
    </button>
  );
};

Button.defaultName = 'Button';
Button.propTypes = {
  /**
   * The content of the button
   */
  children: PropType.children,
  /**
   * The type of button
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /**
   * Perform this action when clicked
   */
  onClick: PropType.func,
  /**
   * If the button should be disabled
   */
  disabled: PropTypes.bool,
  /**
   * This will render the button in different colors, refer to style guide
   */
  status: PropTypes.oneOf(['success', 'warning', 'primary', 'danger'])
};
Button.defaultProps = {
  type: 'submit',
  onClick: () => {},
  status: 'primary',
  disabled: false,
};

export default Button;
