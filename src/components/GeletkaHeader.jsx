import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledGeletkaHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0 4rem 0;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    letter-spacing: 1.875rem;
    text-transform: uppercase;
    margin: 0;

    a {
      color: black;
      text-decoration: none;
    }
  }
`;

const GeletkaHeader = () => {
  return (
    <StyledGeletkaHeader>
      <h1>
        <Link to="/" rel="homepage">
          G+ Pattern Library
        </Link>
      </h1>
      {/* <div className="header-info">
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
      </div> */}
    </StyledGeletkaHeader>
  );
};

export default GeletkaHeader;
