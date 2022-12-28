import React from 'react';
import styled from 'styled-components';
import GeletkaHeader from './GeletkaHeader';
import Sidebar from './Sidebar';

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

  .info {
    display: flex;
  }

  #gatsby-focus-wrapper,
  #___gatsby {
    height: 100%;
  }

  .children {
    padding: 2rem 1rem;
  }
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <GeletkaHeader />
      <div className="info">
        <Sidebar />
        <div className="children">{children}</div>
      </div>
    </StyledLayout>
  );
}
