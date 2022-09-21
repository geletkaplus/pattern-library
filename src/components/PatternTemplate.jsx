import React from "react";
import styled from "styled-components";

const StyledPatternTemplate = styled.div`
  padding: 2rem 1rem;

  h3 {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    margin: 0 0 3rem 4rem;
  }

  iframe {
    width: 50rem;
    border: 0;
    border-radius: 10px;
    transform: scale(1);
    overflow: hidden;
    margin: 1rem 0;
  }
`;

const PatternTemplate = ({
  componentName,
  children,
  frameTitle,
  src,
  height,
}) => {
  return (
    <StyledPatternTemplate>
      <h3>{componentName}</h3>

      {children}

      <div>
        <iframe
          title={frameTitle}
          src={src}
          style={{ height }}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </StyledPatternTemplate>
  );
};

export default PatternTemplate;
