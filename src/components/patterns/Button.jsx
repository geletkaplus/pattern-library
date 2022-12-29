import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledButton = styled.div`
  display: flex;

  a,
  button {
    padding: 0.5rem 1rem;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 5px;
    outline: none;
    color: white;
    cursor: pointer;
    margin: 0.5rem;
  }

  .primary {
    border: 2px solid #96adb9;
    background: #a0c1d3;

    :hover,
    :focus {
      background-color: white;
      color: #96adb9;
    }
  }

  .secondary {
    border: 2px solid #9898a3;
    background: #a6a6ac;

    :hover,
    :focus {
      background-color: white;
      color: #9898a3;
    }
  }

  .clear {
    background: none;
  }

  .clear.primary {
    color: #a0c1d3;
    :hover,
    :focus {
      color: #9898a3;
    }
  }
  .clear.secondary {
    color: #a6a6ac;
    :hover,
    :focus {
      color: #9898a3;
    }
  }
`;

const Button = ({ buttonText, secondary, clear, link, func }) => {
  let className = ['primary'];
  if (secondary) className = ['secondary'];
  if (clear) className.push('clear');
  className = className.join(' ');

  return (
    <StyledButton>
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
