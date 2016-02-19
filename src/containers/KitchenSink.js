import React from 'react';
import { connect } from 'react-redux';

import { showModal, hideModal } from '../reducers/modal';

import Button from '../components/Button';
import Card from '../components/Card';
import Content from '../components/Content';
import Debug from '../components/Debug';
import Modal from '../components/Modal';
import Nav from '../components/Nav';
import ProfileCard from '../components/ProfileCard';
import Textarea from '../components/Textarea';

function mapStateToProps(state) {
  return {
    modalVisible: state.modal.get('isVisible'),
    state: state, // For debugging purposes, don't do this!
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onShowModal: () => dispatch(showModal()),
    onHideModal: () => dispatch(hideModal()),
  };
}

const KitchenSink = (props) => {
  const {
    modalVisible,
    onHideModal,
    onShowModal,
    state,
  } = props;

  return (
    <div>
      <Nav title="Kitchen Sink" />
      <Content blur={ modalVisible }>
        <div className="clearfix mb2">
          <h1>Kitchen Sink</h1>
          <hr />
        </div>

        <div className="clearfix mb2">
          <div className="col col-12">
            <h2>Topic Card</h2>
            <hr />
          </div>
          <div className="col col-12">
            <Card />
            <Card />
          </div>
        </div>

        <div className="clearfix mb2">
          <div className="col col-12">
            <h2>Profile Card</h2>
            <hr />
          </div>
          <div className="col col-12">
            <ProfileCard
              name="Jane Doe"
              topics={ ['Canoeing', 'Camping', 'Basketball'].join(', ') } />
          </div>
        </div>

        <div className="clearfix mb2">
          <div className="col col-12">
            <h2>Buttons</h2>
            <hr />
          </div>
          <div className="col col-12">
            <Button className="m1">Info</Button>
            <Button className="bg-green m1 rounded">+</Button>
            <Button className="bg-red m1 rounded">-</Button>
          </div>
        </div>

        <div className="clearfix mb2">
          <div className="col col-12">
            <h2>Modal</h2>
            <hr />
          </div>
          <div className="col col-12">
            <Button
              className="m1"
              onClick={ onShowModal }>Open</Button>
          </div>
        </div>

        <div className="clearfix mb2">
          <div className="col col-12">
            <h2>Debug</h2>
            <hr />
          </div>
          <div className="col col-12">
            <Debug state={ state } />
          </div>
        </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(KitchenSink);
