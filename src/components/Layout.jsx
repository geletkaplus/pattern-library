import React from 'react';
import styled from 'styled-components';
import GeletkaHeader from './GeletkaHeader';
import GeletkaNav from './GeletkaNav';

const StyledLayout = styled.div`
  font-family: arial;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  html,
  body {
    min-height: 100vh;
    height: 100%;
  }

  #gatsby-focus-wrapper,
  #___gatsby {
    height: 100%;
  }

  .info {
    display: flex;
    gap: 4rem;
    width: 100%;
  }
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <GeletkaHeader />
      <div className="info">
        <GeletkaNav />
        {children}
      </div>
    </StyledLayout>
  );
}
