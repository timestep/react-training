import React, { PropTypes } from 'react';

const Column = ({ className, children }) => {
  return (
    <div className={ `col ${ className }` }>
      { children }
    </div>
  );
};

Column.defaultProps = {
  className: 'col-12',
};

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Column;
