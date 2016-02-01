import React, { PropTypes }  from 'react';

const Textarea = ({ fieldDefinition, disabled, style }) => {
  return (
    <textarea
      style={ style }
      className="block col-12 mb1 field"
      disabled={ disabled }
      { ...fieldDefinition }></textarea>
  );
};

Textarea.defaultProps = {
  disabled: false,
  style: {},
};

Textarea.propTypes = {
  style: PropTypes.object,
  disabled: PropTypes.bool.isRequired,
  fieldDefinition: PropTypes.object.isRequired,
};

export default Textarea;
