import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import Button from '../components/patterns/Button';
import Pill from '../components/patterns/inputs/Pill';
import styled from 'styled-components';

const StyledButtonPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .pill-container {
    display: flex;
    gap: 2rem;
  }
`;

const ButtonPage = () => {
  return (
    <StyledButtonPage>
      <PatternTemplate
        componentName={'Pill button'}
        description={`Pill buttons to use for inputs that create a list of values.
        
PROPS: { text }`}
        code={`
import React, { useState } from 'react';
import close from '../../../images/black-close.svg';
import styled from 'styled-components';

const StyledPill = styled.div\`
  padding: 0.5rem 1rem;
  max-width: fit-content;
  display: flex;
  justify-content: space-between;
  border-radius: 6.25rem;
  border: 2px solid gray;
  gap: 0.5rem;
  font-size: 0.875rem;

  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }
\`;

const Pill = ({ text }) => {
  const [display, setDisplay] = useState(true);

  return (
    display && (
      <StyledPill className="pill">
        {text}
        <button onClick={() => setDisplay(false)}>
          <img src={close} alt="remove pill" height="8" width="8" />
        </button>
      </StyledPill>
    )
  );
};

export default Pill;

      `}
      >
        <div className="pill-container">
          <Pill text="Text 1" />
          <Pill text="Text 2" />
          <Pill text="Text 3" />
          <Pill text="Text 4" />
          <Pill text="Text 5" />
        </div>
      </PatternTemplate>

      <PatternTemplate
        componentName={'Internal link button'}
        description={`Button with primary, secondary, primary-clear, and secondary-clear variants. Use the 'func' prop to pass onClick behavior.

Also allows for semantic links when the 'link' prop is defined. External links render an <a> tag that opens an external tab while internal links render a Gatsby <Link> tag.
      
PROPS: { text, secondary, clear, link, func }`}
      >
        <Button link="/" text={'Internal link Button'} />
      </PatternTemplate>
      <PatternTemplate componentName={'External link button'}>
        <Button
          link="https://www.ctvnews.ca/polopoly_fs/1.4692721.1574189694!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"
          text={'External link button'}
        />
      </PatternTemplate>
      <PatternTemplate componentName={'Primary button'}>
        <Button
          func={() => alert('You just clicked the primary button')}
          text={'Primary Button'}
        />
      </PatternTemplate>
      <PatternTemplate componentName={'Secondary button'}>
        <Button
          secondary
          func={() => alert('You just clicked the secondary button')}
          text={'Secondary Button'}
        />
      </PatternTemplate>
      <PatternTemplate componentName={'Primary clear button'}>
        <Button
          clear
          func={() => alert('You just clicked the primary clear button')}
          text={'Primary clear Button'}
        />
      </PatternTemplate>
      <PatternTemplate
        componentName={'Secondary clear button'}
        code={`import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledButton = styled.div\`
  display: flex;

  a,
  button {
    display: flex;
    padding: 0.5rem 1rem;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 5px;
    outline: none;
    color: white;
    cursor: pointer;
    justify-content: center;
  }

  .primary {
    border: 2px solid red;
    background: red;

    :hover {
      background-color: white;
      color: red;
    }
  }

  .secondary {
    border: 2px solid gray;
    background: gray;

    :hover,
    :focus {
      background-color: white;
      color: gray;
    }
  }

  .clear {
    background: none;
  }

  .clear.primary {
    color: black;
    border: 2px solid black;
    :hover,
    :focus {
      color: gray;
      border: 2px solid gray;
    }
  }
  .clear.secondary {
    color: gray;
    :hover,
    :focus {
      color: black;
      border: 2px solid black;
    }
  }
\`;

const Button = ({ text, secondary, clear, link, func }) => {
  let className = ['primary'];
  if (secondary) className = ['secondary'];
  if (clear) className.push('clear');
  className = className.join(' ');

  return (
    <StyledButton className="button">
      {link ? (
        link[0] !== '/' ? (
          <a className={className} href={link} target="_blank">
            {text}
          </a>
        ) : (
          <Link to={link} className={className}>
            {text}
          </Link>
        )
      ) : (
        <button className={className} onClick={func}>
          {text}
        </button>
      )}
    </StyledButton>
  );
};

export default Button;
`}
      >
        <Button
          clear
          secondary
          func={() => alert('You just clicked the secondary clear button')}
          text={'Secondary clear Button'}
        />
      </PatternTemplate>
    </StyledButtonPage>
  );
};

export default ButtonPage;
