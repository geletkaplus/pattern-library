import React from 'react';
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
`;

const Button = ({ buttonText, secondary, link, func }) => {
  return (
    <StyledButton className="button">
      {link ? (
        <a
          className={secondary ? 'secondary' : 'primary'}
          href={link}
          target="_blank"
        >
          {buttonText}
        </a>
      ) : (
        <button className={secondary ? 'secondary' : 'primary'} onClick={func}>
          {buttonText}
        </button>
      )}
    </StyledButton>
  );
};

export default Button;
