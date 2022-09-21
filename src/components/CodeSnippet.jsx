import React from "react";
import styled from "styled-components";

const StyledCodeSnippet = styled.div`
  iframe {
    width: 50rem;
    border: 0;
    border-radius: 10px;
    transform: scale(1);
    overflow: hidden;
    margin: 1rem 0;
  }
`;

const CodeSnippet = ({ title, src, height }) => {
  return (
    <StyledCodeSnippet>
      <iframe
        title={title}
        src={src}
        style={{ height }}
        sandbox="allow-scripts allow-same-origin"
      />
    </StyledCodeSnippet>
  );
};

export default CodeSnippet;
