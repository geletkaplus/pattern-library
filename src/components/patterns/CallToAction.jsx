import React from 'react';
import styled from 'styled-components';

const StyledCallToAction = styled.section``;

const CallToAction = ({ title, children }) => {
  return (
    <StyledCallToAction>
      <h3>{title}</h3>
      {children}
    </StyledCallToAction>
  );
};
export default CallToAction;
