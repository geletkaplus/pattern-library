import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.label``;

const TextInput = ({ text, label }) => {
  return (
    <StyledTextInput>
      {label}
      <input type={'text'} />
    </StyledTextInput>
  );
};
export default TextInput;
