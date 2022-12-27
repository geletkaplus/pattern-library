import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.label``;

const Checkbox = ({ label }) => {
  return (
    <StyledCheckbox>
      {label}
      <input type={'checkbox'} />
    </StyledCheckbox>
  );
};
export default Checkbox;
