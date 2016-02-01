import React, { PropTypes } from 'react';

const Debug = ({ state }) => {
  return (
    <pre className="border rounded bg-silver p1" style={ styles }>
      { JSON.stringify(state, null, 2) }
    </pre>
  );
};

Debug.defaultProps = {};

Debug.propTypes = {
  state: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
};

const styles = {
  overflow: 'auto',
  textAlign: 'left',
};

export default Debug;
