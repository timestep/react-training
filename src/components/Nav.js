import React, { PropTypes } from 'react';

import NavLink from './NavLink';

const Nav = ({ title }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z4 bg-blue white">
      <div
        style={ styles.center }
        className="flex flex-auto p2">
        <span className="h3">{ title }</span>
      </div>
      <div
        style={ styles.center }
        className="flex flex-center bg-lighten-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/matches">Matches</NavLink>
        <NavLink to="/topics">Topics</NavLink>
        <NavLink to="/sink">Sink</NavLink>
      </div>
    </div>
  );
};

Nav.defaultProps = {
  title: 'App Name',
};

Nav.propTypes = {
  title: PropTypes.string,
};

const styles = {
  center: {
    justifyContent: 'center',
  },
};

export default Nav;
