import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import { Nav } from '../components/patterns/Nav';

const NavPage = () => {
  const navList = ['Home', 'Blog', 'About Us'];
  return (
    <PatternTemplate
      componentName={'Nav'}
      code={`import React, { useState, useEffect } from 'react';
    import { Link } from 'gatsby';
    import { useWindowSize } from '../../lib/useWindowSize';
    import slugify from 'slugify';
    import styled from 'styled-components';
    
    const StyledNav = styled.nav\`
      padding: 1.875rem;
      width: 100%;
      border: 2px solid gray;
      border-radius: 5px;
    \`;
    
    const StyledNavLinks = styled.ul\`
      display: flex;
      list-style-type: none;
      gap: 3rem;
      margin: 0;
      padding: 0;
      justify-content: space-between;
      width: 100%;
    
      li {
        display: flex;
        align-items: center;
      }
    
      a {
        font-weight: 400;
        font-size: 1rem;
        text-decoration: none;
        color: red;
    
        :hover {
          text-decoration: underline;
        }
      }
    
      .logo-placeholder {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.5rem;
      }
    
      .link-container {
        display: flex;
        gap: 1rem;
      }
    \`;
    
    const StyledSidebar = styled.nav\`\`;
    
    const NavLinks = ({ navList, projectName }) => {
      return (
        <StyledNavLinks className="nav-links">
          {projectName && (
            <li>
              <Link>
                <div className="logo-placeholder">{projectName}</div>
              </Link>
            </li>
          )}
          {navList ? (
            <div className="link-container">
              {navList.map(link => (
                <li>
                  <Link to={\`/\${slugify(link, { lower: true, strict: true })}\`}>
                    {link}
                  </Link>
                </li>
              ))}
            </div>
          ) : (
            <>
              <li>
                <Link to={\`/blog\`}>Articles</Link>
              </li>
            </>
          )}
        </StyledNavLinks>
      );
    };
    
    const Nav = ({ navList, projectName }) => {
      const [sidebar, setSidebar] = useState(false);
    
      const size = useWindowSize();
    
      useEffect(() => {
        if (size.width < 900) {
          setSidebar(true);
        }
      }, [size]);
    
      return sidebar ? (
        <StyledSidebar>
          <NavLinks navList={navList} projectName={projectName} />
        </StyledSidebar>
      ) : (
        <StyledNav>
          <NavLinks navList={navList} projectName={projectName} />
        </StyledNav>
      );
    };
    
    export { Nav, NavLinks };
    `}
    >
      <Nav navList={navList} projectName="Example logo" />
    </PatternTemplate>
  );
};

export default NavPage;
