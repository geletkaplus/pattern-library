import React from "react";
import styled from "styled-components";
import Layout from "./layout";

const StyledPatternTemplate = styled.div`
  padding: 2rem 5rem;
  gap: 2rem;

  h3 {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    margin: 0;
  }
`;

const PatternTemplate = ({ componentName, children }) => {
  return (
    <StyledPatternTemplate>
      <h3>{componentName}</h3>
      {children}
    </StyledPatternTemplate>
  );
};

export default PatternTemplate;
