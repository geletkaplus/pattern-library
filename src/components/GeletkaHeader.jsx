import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledGeletkaHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid gray;
  padding-bottom: 1rem;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    letter-spacing: 2rem;
    text-transform: uppercase;
    margin: 0;

    a {
      color: black;

      :hover {
        text-decoration: none;
      }
    }
  }

  a {
    color: red;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  p {
    color: gray;
  }

  .info {
    display: flex;
    flex-direction: column;
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
      <div className="info">
        <p>
          Code snippets generated using{' '}
          <a href="https://carbon.now.sh/" alt="Carbon" target="blank">
            Carbon
          </a>
          .
        </p>
        <p>
          To upload a code snippet, copy the URL and add "embed" after
          "carbon.now.sh/" and before "?bg=rgba" to create a src attribute for
          the CodeSnippet.jsx component.
        </p>
      </div>
    </StyledGeletkaHeader>
  );
};

export default GeletkaHeader;
