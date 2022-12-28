import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import Modal from '../components/patterns/Modal';

const ModalPage = () => {
  return (
    <PatternTemplate
      componentName={'Modal'}
      frameTitle={'Modal'}
      height={'60rem'}
    >
      <Modal toggleText={'View modal'} closeText={'Close modal'}>
        This is a modal
      </Modal>
    </PatternTemplate>
  );
};

export default ModalPage;
