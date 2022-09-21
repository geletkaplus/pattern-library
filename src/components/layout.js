import React from "react";
import styled from "styled-components";
import GeletkaHeader from "./GeletkaHeader";
import Sidebar from "./Sidebar";

const StyledLayout = styled.div`
  font-family: arial;
  display: flex;
  flex-direction: column;
  font-family: arial;
  height: 100%;

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
  }

  a {
    color: red;
    text-decoration: none;
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
      <div class="info">
        <Sidebar />
        {children}
      </div>
    </StyledLayout>
  );
}
