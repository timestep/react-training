import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

const NavLink = ({ children, to, count }) => {
  const countClasses = classNames({
    'inline-block': count > 0,
    hide: count <= 0,
  });

  return (
    <Link
      className="relative white p1 m1 block light"
      style={ styles.base }
      activeStyle={ styles.active }
      to={ to }>
      { children }
      <span
        style={ styles.badge }
        className={ `bg-red p1 absolute ${ countClasses }` }>
        { count }
      </span>
    </Link>
  );
};

NavLink.defaultProps = {
  count: 0,
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  count: PropTypes.number,
};

const styles = {
  base: {
    fontWeight: 200,
    textDecoration: 'none',
    borderBottom: '1px solid',
    borderColor: 'transparent',
  },
  badge: {
    padding: 0,
    top: '20px',
    height: '20px',
    width: '20px',
    textAlign: 'center',
    fontSize: '10px',
    lineHeight: '20px',
    borderRadius: '50%',
  },
  active: {
    borderColor: 'white',
  },
};

export default NavLink;
