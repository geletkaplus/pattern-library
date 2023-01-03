import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import Button from '../components/patterns/Button';
import styled from 'styled-components';

const StyledButtonPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ButtonPage = () => {
  return (
    <StyledButtonPage>
      <PatternTemplate componentName={'Internal link button'}>
        <Button link="/" buttonText={'Internal link Button'} />
      </PatternTemplate>
      <PatternTemplate componentName={'External link button'}>
        <Button
          link="https://www.ctvnews.ca/polopoly_fs/1.4692721.1574189694!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"
          buttonText={'External link button'}
        />
      </PatternTemplate>
      <PatternTemplate componentName={'Primary button'}>
        <Button
          func={() => alert('You just clicked the primary button')}
          buttonText={'Primary Button'}
        />
      </PatternTemplate>
      <PatternTemplate componentName={'Secondary button'}>
        <Button
          secondary
          func={() => alert('You just clicked the secondary button')}
          buttonText={'Secondary Button'}
        />
      </PatternTemplate>
      <PatternTemplate componentName={'Primary clear button'}>
        <Button
          clear
          func={() => alert('You just clicked the primary clear button')}
          buttonText={'Primary clear Button'}
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

const Button = ({ buttonText, secondary, clear, link, func }) => {
  let className = ['primary'];
  if (secondary) className = ['secondary'];
  if (clear) className.push('clear');
  className = className.join(' ');

  return (
    <StyledButton className="button">
      {link ? (
        link[0] !== '/' ? (
          <a className={className} href={link}>
            {buttonText}
          </a>
        ) : (
          <Link to={link} className={className}>
            {buttonText}
          </Link>
        )
      ) : (
        <button className={className} onClick={func}>
          {buttonText}
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
          buttonText={'Secondary clear Button'}
        />
      </PatternTemplate>
    </StyledButtonPage>
  );
};

export default ButtonPage;
