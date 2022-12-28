import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    border-radius: 5px;
    border: 1px solid gray;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
`;

const TextInput = ({ label }) => {
  return (
    <StyledTextInput>
      {label}
      <input type={'text'} />
    </StyledTextInput>
  );
};
export default TextInput;
