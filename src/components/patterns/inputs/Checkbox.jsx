import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.label``;

const Checkbox = ({ label }) => {
  return (
    <StyledCheckbox>
      <input type={'checkbox'} />
      {label}
    </StyledCheckbox>
  );
};
export default Checkbox;
