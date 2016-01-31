import React, { PropTypes } from 'react';

const FormGroup = ({ children, style, className}) => {
  return (
    <div className={ `mb2 ${ className }` } style={{ ...style }}>
      { children }
    </div>
  );
};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

FormGroup.defaultProps = {
  style: {},
  className: '',
};

export default FormGroup;
