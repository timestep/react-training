import React, { PropTypes } from 'react';

const Form = ({ children, onSubmit, style, className }) => {
  return (
    <form
      style={ style }
      className={ `${ className } p2` }
      onSubmit={ onSubmit }>
      { children }
    </form>
  );
};

Form.defaultProps = {
  className: '',
  style: {},
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default Form;
