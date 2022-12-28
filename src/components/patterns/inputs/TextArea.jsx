import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  textarea {
    resize: none;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 0.5rem 1rem;
    font-size: 1rem;

    :active {
      border: none;
      outline: none;
    }
  }
`;

const TextArea = ({ label }) => {
  return (
    <StyledTextArea>
      {label}
      <textarea />
    </StyledTextArea>
  );
};
export default TextArea;
