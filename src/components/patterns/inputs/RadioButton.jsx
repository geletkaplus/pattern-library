import React from 'react';
import styled from 'styled-components';

const StyledRadioButton = styled.label``;

const RadioButton = ({ label, value, name }) => {
  return (
    <StyledRadioButton>
      <input type={'radio'} value={value ? value : label} name={name} />
      {label}
    </StyledRadioButton>
  );
};
export default RadioButton;
