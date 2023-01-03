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
  return <StyledIndex />;
};

export default Index;
