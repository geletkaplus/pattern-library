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

  .code-container {
    margin-top: 1rem;

    .button {
      width: 100%;

      a,
      button {
        width: 100%;
        background-color: black;
        border: 2px solid black;

        :hover {
          border: 2px solid black;
          color: white;
        }
      }
    }
  }
`;

const PatternTemplate = ({ componentName, children, code }) => {
  const [visible, setVisible] = useState(false);

  const toggleContainer = () => {
    setVisible(!visible);
  };

  return (
    <StyledPatternTemplate>
      <h3>{componentName}</h3>
      <div className="example-container">{children}</div>
      {code && (
        <div className="code-container">
          <Button
            func={toggleContainer}
            buttonText={visible ? 'Hide code' : 'View code'}
          />
          {visible && <CopyBlock text={code} language="jsx" theme="dracula" />}
        </div>
      )}
    </StyledPatternTemplate>
  );
};

export default PatternTemplate;
