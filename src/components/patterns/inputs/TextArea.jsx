import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.label``;

const TextArea = ({ text, label }) => {
  return (
    <StyledTextArea>
      {label}
      <textarea />
    </StyledTextArea>
  );
};
export default TextArea;
