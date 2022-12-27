import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  button,
  a {
    display: inline-block;
    text-decoration: none;
    border-radius: 18px;
    padding: 0.5rem 1.5rem;
    width: 10rem;
    height: 3rem;
    font-weight: 700;
    vertical-align: center;
    font-size: 0.9rem;

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: translateY(2px);
    }
  }

  .secondary {
    display: inline-block;
    border-radius: 4px;
    padding: 0.5rem 1.5rem;
    width: 10rem;
    height: 3rem;
    font-weight: 700;
    vertical-align: center;
    font-size: 0.9rem;

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: translateY(2px);
    }
  }
`;

const Button = ({ buttonText, secondary, link, func }) => {
  return (
    <StyledButton className={secondary ? 'secondary' : ''}>
      {link ? (
        <a href={link}>{buttonText}</a>
      ) : (
        <button onClick={func}>{buttonText}</button>
      )}
    </StyledButton>
  );
};

export default Button;
