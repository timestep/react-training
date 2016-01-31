import React, { PropTypes } from 'react';
import classNames from 'classnames';

function _renderLoading() {
  return (
    <img src="src/assets/loading.svg" />
  );
}

const Container = ({ loading, children }) => {
  const classes = classNames({
    'flex': loading,
    'flex-auto': loading,
  });

  return (
    <div
      style={{ ...loading ? styles.loading : {} }}
      className={ classes }>
      {
        loading ? _renderLoading() : children
      }
    </div>
  );
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
};

export default Container;
