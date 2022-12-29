import * as React from 'react';
import styled from 'styled-components';

const StyledIndex = styled.div`
  color: gray;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  line-height: 1.5rem;

  a {
    color: red;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 0;
  }
`;

const Index = () => {
  return (
    <StyledIndex>
      <p>
        Code snippets are generated using{' '}
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
    </StyledIndex>
  );
};

export default Index;
