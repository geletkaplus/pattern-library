import React from 'react';
import styled from 'styled-components';
import GeletkaHeader from './GeletkaHeader';
import Sidebar from './Sidebar';

const StyledLayout = styled.div`
  font-family: arial;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;

  html,
  body {
    min-height: 100vh;
    height: 100%;
  }

  .info {
    display: flex;
  }

  #gatsby-focus-wrapper,
  #___gatsby {
    height: 100%;
  }
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <GeletkaHeader />
      <div className="info">
        <Sidebar />
        {children}
      </div>
    </StyledLayout>
  );
}
