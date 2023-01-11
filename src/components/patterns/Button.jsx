import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledButton = styled.div`
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
`;

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
