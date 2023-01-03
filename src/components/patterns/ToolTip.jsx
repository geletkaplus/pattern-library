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
    display: flex;
    flex-direction: column;

    &:hover {
      cursor: pointer;
    }
  }

  .triangle {
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid gray;
    display: inline;
    position: relative;
  }

  .text-container {
    background-color: gray;
    padding: 25px;
    border-radius: 8px;
    position: relative;
    width: 100%;
    min-width: 200px;
    max-width: 500px;
    margin-top: 15px;
    left: -25px;
    color: white;
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
        <div className="tool-tip">
          <div className="triangle" />
          <div className="text-container">{text}</div>
        </div>
      )}
    </StyledToolTip>
  );
};

export default ToolTip;
