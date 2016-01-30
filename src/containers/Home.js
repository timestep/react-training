import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

Home.defaultProps = {};
Home.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
