import React, { PropTypes } from 'react';

const Content = ({ children, blur }) => {
  return (
    <div
      className="p2"
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
    marginTop: '6rem',
    transition: 'all 300ms',
  },
  blur: {
    WebkitFilter: 'blur(5px)',
  },
};

export default Content;
