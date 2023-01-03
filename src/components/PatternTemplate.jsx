import React, { useState } from 'react';
import Button from './patterns/Button';
import styled from 'styled-components';
import { CopyBlock } from 'react-code-blocks';

const StyledPatternTemplate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 50rem;
  width: 100%;

  h3 {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-size: 1rem;
    margin: 0;
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

  .button {
    width: 100%;

    a,
    button {
      width: 100%;
    }
  }
`;

const PatternTemplate = ({
  componentName,
  children,
  frameTitle,
  src,
  height,
  code,
}) => {
  const [visible, setVisible] = useState(false);

  const toggleContainer = () => {
    setVisible(!visible);
  };

  return (
    <StyledPatternTemplate>
      <h3>{componentName}</h3>
      <div className="example-container">{children}</div>
      {code && (
        <>
          <Button func={toggleContainer} buttonText="View code" />
          {visible && <CopyBlock text={code} language="jsx" theme="dracula" />}
        </>
      )}
    </StyledPatternTemplate>
  );
};

export default PatternTemplate;
