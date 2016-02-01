import React, { PropTypes } from 'react';

const Content = ({ children, blur }) => {
  return (
    <div
      className="p2 absolute left-0 right-0 bottom-0 center"
      style={{
        ...styles.base,
        ...blur ? styles.blur : null,
      }}>
      { children }
    </div>
  );
};

Content.defaultProps = {
  blur: false,
};

Content.propTypes = {
  children: PropTypes.node,
  blur: PropTypes.bool,
};

const styles = {
  base: {
    top: '119px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    transition: 'all 300ms',
  },
  blur: {
    WebkitFilter: 'blur(5px)',
  },
};

export default Content;
