import React, { useState } from 'react';
import Button from './patterns/Button';
import styled from 'styled-components';

const StyledPatternTemplate = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  h3 {
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    font-size: 1.5rem;
    margin-top: 0;
  }

  iframe {
    width: 50rem;
    border: 0;
    border-radius: 10px;
    transform: scale(1);
    overflow: hidden;
    margin: 1rem 0;
  }

  .example-container {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    width: 100%;
  }

  .hidden-container {
    display: flex;
    width: 100%;
  }
`;

const PatternTemplate = ({
  componentName,
  children,
  frameTitle,
  src,
  height,
}) => {
  const [visible, setVisible] = useState(false);

  const toggleContainer = () => {
    setVisible(!visible);
  };

  return (
    <StyledPatternTemplate>
      <h3>{componentName}</h3>
      <div className="example-container">{children}</div>
      {src && (
        <>
          <button onClick={toggleContainer}>View code</button>
          {visible && (
            <iframe
              title={frameTitle}
              src={src}
              style={{ height }}
              sandbox="allow-scripts allow-same-origin"
            />
          )}
        </>
      )}
    </StyledPatternTemplate>
  );
};

export default PatternTemplate;
