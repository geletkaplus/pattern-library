import React, { useState } from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;

  .modal {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    gap: 0.5rem;
  }
`;

const Modal = ({ toggleText, modalText, closeText }) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <StyledModal>
      <button onClick={showModal}>{toggleText}</button>
      {show && (
        <div className="modal">
          {modalText}
          <button onClick={closeModal}>{closeText}</button>
        </div>
      )}
    </StyledModal>
  );
};
export default Modal;
