import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  a {
    font-weight: 400;
    font-size: 1rem;
    text-decoration: none;
    padding: 0.5rem;
  }
`;

const StyledNavLinks = styled.ul`
  display: flex;
  list-style-type: none;

  li {
    margin: 1.875rem 1rem;
  }
`;

const StyledSidebar = styled.nav``;

const NavLinks = () => {
  return (
    <StyledNavLinks>
      <li>hello</li>
    </StyledNavLinks>
  );
};

const Nav = sidebar => {
  return sidebar ? (
    <StyledSidebar>
      <NavLinks />
    </StyledSidebar>
  ) : (
    <StyledNav>
      <NavLinks />
    </StyledNav>
  );
};

export default Nav;
