import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.div`
  border-right: 1px solid black;
  height: 100vh;
  width: 15rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 1rem 2rem;

  a {
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
            <a href="#" alt="button">
              Button
            </a>
          </dd>
          <dd>
            <a href="#" alt="carousel">
              Carousel
            </a>
          </dd>
          <dd>
            <a href="#" alt="checkbox">
              Checkbox
            </a>
          </dd>
        </div>

        <div className="list-container">
          <dt>Guidelines</dt>
          <dd>
            <a href="#" alt="color">
              Color
            </a>
          </dd>
          <dd>
            <a href="#" alt="typography">
              Typography
            </a>
          </dd>
          <dd>
            <a href="#" rel="media queries">
              Media queries
            </a>
          </dd>
        </div>
      </dl>
    </StyledSidebar>
  );
};

export default Sidebar;
