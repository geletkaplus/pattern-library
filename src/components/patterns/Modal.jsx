import React, { useState, useRef } from 'react';
import useClickOutside from '../../lib/useClickOutside';
import Button from './Button';
import styled from 'styled-components';

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;

  .modal {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    border: 1px solid gray;
    background: white;
    border-radius: 5px;
    padding: 1rem 2rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 15rem;

    button {
      max-width: 7rem;
    }
  }

  .openModal {
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
  }
`;

const Modal = ({ toggleText, modalText, closeText }) => {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef(null);

  const showModal = () => {
    setShow(true);
  };

  const closeInput = () => {
    setShow(false);
  };

  useClickOutside(wrapperRef, closeInput);

  return (
    <StyledModal>
      <div className={`${show && 'openModal'}`} />
      <button onClick={showModal}>{toggleText}</button>
      {show && (
        <div className="modal" ref={wrapperRef}>
          {modalText}
          <Button
            func={console.log('You clicked the submit button')}
            buttonText={'Submit'}
          />
          <Button secondary func={closeInput} buttonText={'Close'} />
        </div>
      )}
    </StyledModal>
  );
};
export default Modal;
