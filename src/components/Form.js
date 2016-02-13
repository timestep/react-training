import React, { PropTypes } from 'react';

const Form = ({ children, handleSubmit, style, className }) => {
  return (
    <form
      style={ style }
      className={ `mb2 mt2 ${ className }` }
      onSubmit={(e) => {
        e.preventDefault();
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
