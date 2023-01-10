import React, { useState } from 'react';
import close from '../../../images/black-close.svg';
import styled from 'styled-components';

const StyledPill = styled.div`
  padding: 0.5rem 1rem;
  max-width: fit-content;
  display: flex;
  justify-content: space-between;
  border-radius: 6.25rem;
  border: 2px solid gray;
  gap: 0.5rem;
  font-size: 0.875rem;

  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }
`;

const Pill = ({ text }) => {
  const [display, setDisplay] = useState(true);

  return (
    display && (
      <StyledPill className="pill">
        {text}
        <button onClick={() => setDisplay(false)}>
          <img src={close} alt="remove pill" height="8" width="8" />
        </button>
      </StyledPill>
    )
  );
};

export default Pill;
