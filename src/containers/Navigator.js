import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import Button from '../components/Button';
import Content from '../components/Content';
import LoginForm from '../components/LoginForm';
import Modal from '../components/Modal';
import Nav from '../components/Nav';
import SignupForm from '../components/SignupForm';

import { login, logout, register } from '../reducers/session';
import { changeModal } from '../reducers/modal';

function mapStateToProps(state) {
  return {
    currentModal: state.modal.get('visible'),
    isAuthenticated: state.session.get('authenticated') === true,
    session: state.session,
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
          <div>{ session.get('displayName') }</div>
        }
        title="DevMatch"
        right={
          <Button onClick={ onLogout }>Logout</Button>
        } />
      <Content blur={ !isAuthenticated }>
        {
          isAuthenticated ? children : null
        }
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
