import React, { PropTypes } from 'react';

const Input = ({ name, label, placeholder, onChange}) => {
  return (
    <div>
      <label name={label}>
        <input placeholder={ placeholder } onChange={ (e) => onChange({value: e.target.value, name: name}) }/>
      </label>
    </div>
  );
};

Input.defaultName = 'Input';
Input.propTypes = {
  /**
   * The children of the component to render
   */
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
Input.defaultProps = {};

export default Input;
