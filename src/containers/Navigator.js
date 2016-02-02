import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import TextButton from '../components/TextButton';
import Content from '../components/Content';
import LoginForm from '../components/LoginForm';
import Modal from '../components/Modal';
import Nav from '../components/Nav';
import NavLink from '../components/NavLink';
import SignupForm from '../components/SignupForm';

import { login, logout, register } from '../reducers/session';
import { changeModal } from '../reducers/ui';

function mapStateToProps(state) {
  const lastViewedMatches = state.ui.get('lastViewedMatches');

  return {
    currentModal: state.ui.get('modalVisible'),
    isAuthenticated: state.session.get('authenticated') === true,
    session: state.session,
    latestMatchCount: state.matches.get('result').reduce((acc, i) => {
      return i.get('updatedAt').getTime() >= lastViewedMatches ? acc + 1 : acc;
    }, 0),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeModal: (val) => dispatch(changeModal(val)),
    onLogout: () => dispatch(logout()),
    onSubmitLogin: (val) => dispatch(login(val)),
    onSubmitSignup: (val) => dispatch(register(val)),
  };
}

const Navigator = (props) => {
  const {
    children,
    currentModal,
    isAuthenticated,
    latestMatchCount,
    onChangeModal,
    onLogout,
    onSubmitLogin,
    onSubmitSignup,
    session,
  } = props;

  return (
    <div>
      <Nav
        left={
          <TextButton className="white">
            { session.get('displayName', '') }
          </TextButton>
        }
        title="DevMatch"
        right={
          <TextButton className="white" href onClick={ onLogout }>
            Logout
          </TextButton>
        }>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/matches" count={ latestMatchCount }>Matches</NavLink>
        <NavLink to="/topics">Topics</NavLink>
      </Nav>
      <Content blur={ !isAuthenticated }>
        { isAuthenticated ? children : null }
      </Content>

      <Modal
        isVisible={ !isAuthenticated }>
        {
          (() => {
            switch (currentModal) {
              case 'login':
                return (
                  <div className="p2 mb2">
                    <LoginForm
                      onSubmit={ onSubmitLogin }
                      message={ session.get('message') }
                      isPending={ session.get('pending') }
                      hasError={ session.get('hasError') } />

                    <a href onClick={(e) => {
                      e.preventDefault();
                      onChangeModal('signup');
                    }}>Switch to Sign Up</a>
                  </div>
                );

              case 'signup':
                return (
                  <div className="p2 mb2">
                    <SignupForm
                      onSubmit={ onSubmitSignup }
                      message={ session.get('message') }
                      isPending={ session.get('pending') }
                      hasError={ session.get('hasError') } />

                    <a href onClick={(e) => {
                      e.preventDefault();
                      onChangeModal('login');
                    }}>Switch to Login</a>
                  </div>
                );

              default:
                return (<div></div>);
            }
          })()
        }
      </Modal>
    </div>
  );
};

Navigator.defaultProps = {};

Navigator.propTypes = {
  children: PropTypes.node.isRequired,
  currentModal: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  latestMatchCount: PropTypes.number.isRequired,
  onChangeModal: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onSubmitLogin: PropTypes.func.isRequired,
  onSubmitSignup: PropTypes.func.isRequired,
  session: PropTypes.instanceOf(Map).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigator);
