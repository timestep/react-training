import React, { PropTypes } from 'react';

const Form = ({ children, handleSubmit, style, className }) => {
  return (
    <form
      style={ style }
      className={ `${ className }` }
      onSubmit={(e) => {
        e.preventDefault();
        document.activeElement.blur();
        handleSubmit();
      }}>
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
  handleSubmit: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default Form;
