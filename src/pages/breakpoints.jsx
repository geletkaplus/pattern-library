import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import styled from 'styled-components';

const StyledBreakpoints = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

const BreakpointPage = () => {
  return (
    <PatternTemplate
      componentName={'Breakpoints'}
      frameTitle={'Breakpoints'}
      height={'60rem'}
    >
      <StyledBreakpoints>
        <li>
          <b>Desktop, Laptop</b>
          <p>px: 901 - 1440</p>
          <p>rem: 56.3125 - 90</p>
        </li>
        <li>
          <b>Tablet</b>
          <p>px: 501 - 900</p>
          <p>rem: 31.3125 - 56.25</p>
        </li>
        <li>
          <b>Mobile</b>
          <p>px: 500 and below</p>
          <p>rem: 31.25 and below</p>
        </li>
      </StyledBreakpoints>
    </PatternTemplate>
  );
};

export default BreakpointPage;
