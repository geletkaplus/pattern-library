import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useClickOutside from '../../lib/useClickOutside';

const StyledToolTip = styled.div`
  display: inline-flex;
  /* float: right;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  z-index: 1;
  margin-left: 1rem;
  justify-content: center;
  align-self: flex-end; */

  .tooltip-container {
    /* width: 25px;
    border-radius: 50%;
    height: 25px;
    display: inline-flex;
    float: right;
    justify-content: space-evenly;
    align-items: center; */

    &:hover {
      cursor: pointer;
    }
  }

  .triangle {
    /* width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid white;
    display: inline;
    position: absolute;
    top: 35px;
    right: -8px; */
  }

  .text-container {
    /* background-color: white;
    padding: 25px;
    border-radius: 8px;
    position: absolute;
    top: 30px;
    width: 100%;
    min-width: 200px;
    max-width: 500px;
    margin-top: 20px;
    right: -30px; */
    color: black;
  }
`;

const ToolTip = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const handleIsOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const closeInput = () => {
    setIsOpen(false);
  };

  useClickOutside(wrapperRef, closeInput);

  return (
    <StyledToolTip>
      <div
        className="tooltip-container"
        onClick={handleIsOpen}
        ref={wrapperRef}
      >
        {children}
      </div>
      {isOpen && (
        <>
          <div className="triangle" />
          <div className="text-container">{text}</div>
        </>
      )}
    </StyledToolTip>
  );
};

export default ToolTip;
