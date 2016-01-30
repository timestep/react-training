import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Nav from '../components/Nav';
import Content from '../components/Content';
import Modal from '../components/Modal';
import Button from '../components/Button';

import { hideModal } from '../reducers/modal';

function mapStateToProps(state) {
  return {
    modalVisible: state.modal.get('isVisible'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onHideModal: () => dispatch(hideModal()),
  };
}

const Navigator = (props) => {
  const {
    children,
    onHideModal,
    modalVisible,
  } = props;

  return (
    <div>
      <Nav title="DevMatch" />
      <Content blur={ modalVisible }>
        { children }
      </Content>

      <Modal
        onClick={ onHideModal }
        isVisible={ modalVisible }>
        <h1>Hello World</h1>
        <Button onClick={ onHideModal }>Close Modal</Button>
      </Modal>
    </div>
  );
};

Navigator.defaultProps = {};

Navigator.propTypes = {
  children: PropTypes.node.isRequired,
  onHideModal: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigator);
