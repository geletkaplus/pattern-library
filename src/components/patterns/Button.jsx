import React from 'react';
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
`;

const Button = ({ buttonText, secondary, link, func }) => {
  return (
    <StyledButton>
      {link ? (
        <a className={secondary ? 'secondary' : 'primary'} href={link}>
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
