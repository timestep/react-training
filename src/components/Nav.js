import React, { PropTypes } from 'react';

import NavLink from './NavLink';

const Nav = ({ title, left, right }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z4 bg-blue white">
      <div
        style={ styles.center }
        className="flex flex-auto p2">
        <div className="left-align" style={ styles.menuItem }>
          { left }
        </div>
        <div className="h3 flex-auto center">{ title }</div>
        <div className="right-align" style={ styles.menuItem }>
          { right }
        </div>
      </div>
      <div
        style={ styles.center }
        className="flex flex-center bg-lighten-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/matches">Matches</NavLink>
        <NavLink to="/topics">Topics</NavLink>
      </div>
    </div>
  );
};

Nav.defaultProps = {
  title: 'App Name',
};

Nav.propTypes = {
  title: PropTypes.string,
  left: PropTypes.node,
  right: PropTypes.node,
};

const styles = {
  center: {
    justifyContent: 'center',
  },
  menuItem: {
    width: '120px',
  },
};

export default Nav;
