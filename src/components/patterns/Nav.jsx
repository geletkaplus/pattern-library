import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useWindowSize } from '../../lib/useWindowSize';
import slugify from 'slugify';
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

const NavLinks = ({ navList }) => {
  return (
    <StyledNavLinks>
      <li>
        <Link>
          <StaticImage
            src="../../images/image-3.jpg"
            alt="<NAME OF PROJECT GOES HERE>"
          />
        </Link>
      </li>
      {navList ? (
        navList.map(link => (
          <li>
            <Link to={`/${slugify(link, { lower: true, strict: true })}`}>
              {link}
            </Link>
          </li>
        ))
      ) : (
        <>
          <li>
            <Link to={`/blog`}>Articles</Link>
          </li>
        </>
      )}
    </StyledNavLinks>
  );
};

const Nav = ({ logo, navList }) => {
  const [sideBar, setSideBar] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 900) {
      setSideBar(false);
    }
  }, [size]);

  return sideBar ? (
    <StyledSidebar>
      <NavLinks logo={logo} navList={navList} />
    </StyledSidebar>
  ) : (
    <StyledNav>
      <NavLinks navList={navList} />
    </StyledNav>
  );
};

export default Nav;
