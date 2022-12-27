import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledGeletkaHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  padding: 2rem;

  h1 {
    font-size: 2rem;
    letter-spacing: 2rem;
    text-transform: uppercase;

    a {
      color: black;
    }
  }

  a {
    color: red;
    text-decoration: none;
  }

  p {
    color: gray;
  }
`;

const GeletkaHeader = () => {
  return (
    <StyledGeletkaHeader>
      <h1>
        <Link to="/" rel="homepage">
          Geletka+ Pattern Library
        </Link>
      </h1>
      <p>
        Code snippets generated using{' '}
        <a href="https://carbon.now.sh/" alt="Carbon" target="blank">
          Carbon
        </a>
        .
      </p>
      <p>
        To upload a code snippet, copy the URL and add "embed" after
        "carbon.now.sh/" and before "?bg=rgba" to create a src attribute for the
        CodeSnippet.jsx component.
      </p>
    </StyledGeletkaHeader>
  );
};

export default GeletkaHeader;
