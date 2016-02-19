import React, { PropTypes }  from 'react';

const Input = ({ type, value, onChange, disabled, style, fieldDefinition }) => {
  return (
    <input
      type={ type }
      style={ style }
      className="block col-12 mb1 field"
      disabled={ disabled }
      onChange={ onChange }
      value={ value }
      { ...fieldDefinition } />
  );
};

Input.defaultProps = {
  type: 'text',
  disabled: false,
  style: {},
};

Input.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Input;
