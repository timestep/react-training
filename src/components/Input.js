import React, { PropTypes }  from 'react';

const Input = (props) => {
  const {
    type,
    value,
    disabled,
    style,
    placeholder,
    fieldDefinition,
  } = props;

  return (
    <input
      type={ type }
      style={ style }
      className="block col-12 mb1 field"
      disabled={ disabled }
      placeholder={ placeholder }
      value={ value }
      { ...fieldDefinition } />
  );
};

Input.defaultProps = {
  type: 'text',
  disabled: false,
  style: {},
  placeholder: '',
};

Input.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  fieldDefinition: PropTypes.object,
  placeholder: PropTypes.string,
};

export default Input;
