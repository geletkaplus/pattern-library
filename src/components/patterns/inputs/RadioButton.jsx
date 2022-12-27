import React from 'react';
import styled from 'styled-components';

const StyledRadioButton = styled.label``;

const RadioButton = ({ label }) => {
  return (
    <StyledRadioButton>
      {label}
      <input type={'RadioButton'} />
    </StyledRadioButton>
  );
};
export default RadioButton;
