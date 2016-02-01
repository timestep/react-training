import React, { PropTypes } from 'react';
import classNames from 'classnames';

function _renderLoading() {
  return (
    <div
      style={ styles.loading }
      className="flex flex-auto">
      <img src="src/assets/loading.svg" />
    </div>
  );
}

function _renderChildren(children) {
  return (
    <div style={ styles.content }>
      { children }
    </div>
  );
}

const Container = ({ loading, children }) => {
  return loading ? _renderLoading() : _renderChildren(children)
};

Container.defaultProps = {
  loading: false,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
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
