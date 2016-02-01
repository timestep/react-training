import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavLink = ({ children, to }) => {
  return (
    <Link
      className="white p1 m1 block light"
      style={ styles.base }
      activeStyle={ styles.active }
      to={ to }>
      { children }
    </Link>
  );
};

NavLink.defaultProps = {};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const styles = {
  base: {
    fontWeight: 200,
    textDecoration: 'none',
    borderBottom: '1px solid',
    borderColor: 'transparent',
  },
  active: {
    borderColor: 'white',
  },
};

export default NavLink;
