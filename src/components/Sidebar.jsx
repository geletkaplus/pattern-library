import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledSidebar = styled.div`
  border-right: 1px solid black;
  height: 100vh;
  width: 15rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 1rem 2rem;

  a {
    color: red;
    text-decoration: none;
  }

  dl {
    gap: 2rem;
  }

  dt {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }

  dl,
  .list-container {
    display: flex;
    flex-direction: column;
  }

  .list-container {
    gap: 1rem;
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <dl>
        <div className="list-container">
          <dt>Components</dt>
          <dd>
            <Link to="../button">Button</Link>
          </dd>
          <dd>
            <Link to="../accordion">Accordion</Link>
          </dd>
          <dd>
            <Link to="../dropdown">Dropdown</Link>
          </dd>
        </div>

        <div className="list-container">
          <dt>Guidelines</dt>
          <dd>
            <Link to="#" alt="color">
              Color
            </Link>
          </dd>
          <dd>
            <Link to="#" alt="typography">
              Typography
            </Link>
          </dd>
          <dd>
            <Link to="#" rel="media queries">
              Media queries
            </Link>
          </dd>
        </div>
      </dl>
    </StyledSidebar>
  );
};

export default Sidebar;
