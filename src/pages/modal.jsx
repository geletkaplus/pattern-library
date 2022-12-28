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
      <Modal
        modalText={'This is a modal'}
        toggleText={'View modal'}
        closeText={'Close modal'}
      />
    </PatternTemplate>
  );
};

export default ModalPage;
