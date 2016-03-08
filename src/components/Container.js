import React, { PropTypes } from 'react';

function _renderLoading() {
  return (
    <div
      style={ styles.loading }
      className="js-loading flex flex-auto">
      <img src="src/assets/loading.svg" />
    </div>
  );
}

function _renderChildren(children, className) {
  return (
    <div className={ `js-loaded ${ className }` } style={ styles.content }>
      { children }
    </div>
  );
}

const Container = ({ loading, children, className }) => {
  return loading ? _renderLoading() : _renderChildren(children, className);
};

Container.defaultProps = {
  loading: false,
  className: '',
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

const styles = {
  loading: {
    height: '100%',
    justifyContent: 'center',
  },
  content: {
    maxWidth: '500px',
    margin: '0 auto',
  },
};

export default Container;
