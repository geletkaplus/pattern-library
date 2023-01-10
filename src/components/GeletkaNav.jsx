import React, { useState } from 'react';
import { NavLinks } from './patterns/Nav';
import styled from 'styled-components';

const StyledGeletkaNav = styled.div`
  max-width: 12rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  text-transform: uppercase;

  h2 {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.3rem;
    margin: 0 0 1rem;
  }

  .link-container {
    flex-direction: column;

    li {
      flex-wrap: wrap;
    }
  }

  .button {
    margin-bottom: -2rem;
    justify-content: center;

    button {
      text-transform: uppercase;
      width: 100%;
    }
  }
`;

const GeletkaNav = () => {
  const components = [
    'Inputs',
    'Accordion',
    'Button',
    // 'Call to action',
    // 'Card',
    'Carousels',
    // 'Photos',
    // 'Videos',
    'Modal',
    'Nav',
    'Tool tip',
  ];

  const guidelines = ['Library', 'Breakpoints', 'Color', 'Fonts'];
  return (
    <StyledGeletkaNav>
      <div>
        <h2>Components</h2>
        <NavLinks navList={components} />
      </div>
      <div>
        <h2>Guidelines</h2>
        <NavLinks navList={guidelines} />
      </div>
    </StyledGeletkaNav>
  );
};

export default GeletkaNav;
