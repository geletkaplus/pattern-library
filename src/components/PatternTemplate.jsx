import React, { useState } from 'react';
import styled from 'styled-components';

const StyledPatternTemplate = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;

  h3 {
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    margin: 0 0 3rem 4rem;
    font-size: 1.5rem;
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
    padding-left: 4rem;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
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
      <button onClick={toggleContainer}>View</button>

      <div id="hidden-container">
        {visible ? (
          <>
            <div className="example-container">{children}</div>
            {src && (
              <iframe
                title={frameTitle}
                src={src}
                style={{ height }}
                sandbox="allow-scripts allow-same-origin"
              />
            )}
          </>
        ) : null}
      </div>
    </StyledPatternTemplate>
  );
};

export default PatternTemplate;
