import React, { PropTypes }  from 'react';

const Textarea = ({ type, value, onChange, disabled, style }) => {
  return (
    <textarea
      style={ style }
      className="block col-12 mb1 field"
      disabled={ disabled }
      onChange={ onChange }
      value={ value }></textarea>
  );
};

Textarea.defaultProps = {
  disabled: false,
  style: {},
};

Textarea.propTypes = {
  style: PropTypes.object,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Textarea;
