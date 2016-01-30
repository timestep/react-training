import React, { PropTypes } from 'react';

const Nav = ({ title }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z4 bg-black white">
      <div
        style={ styles.center }
        className="flex flex-auto p2 bg-lighten-2">
        <span className="h3">{ title }</span>
      </div>
      <div
        style={ styles.center }
        className="flex flex-center bg-lighten-3">
        <a className="white p2 block" href="#">Home</a>
        <a className="white p2 block" href="#">Connections</a>
        <a className="white p2 block" href="#">Post</a>
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
