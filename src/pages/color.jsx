import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import styled from 'styled-components';

const StyledBlock = styled.div`
  display: flex;
  border: 2px solid black;
  width: 11rem;
  height: 11rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 5px;

  .color {
    width: 5rem;
    height: 5rem;
    border-radius: 100px;
  }
`;

const StyledColorPage = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }
`;

const Block = () => {
  const colors = [
    { hex: '#000000', name: '--black' },
    { hex: '#FFFFFF', name: '--white' },
    { hex: '#db0303', name: '--primary-50' },
    { hex: '#ff3939', name: '--primary-100' },
    { hex: '#6a0925', name: '--secondary-50' },
    { hex: '#A4133C', name: '--secondary-100' },
    { hex: '#ff8800', name: '--accent-50' },
    { hex: '#feba5c', name: '--accent-100' },
    { hex: '#e9c2ac', name: '--neutral-50' },
    { hex: '#eddcd2', name: '--neutral-100' },
    { hex: '#8a817c', name: '--gray-50' },
    { hex: '#bcb8b1', name: '--gray-100' },
  ];

  return colors.map(color => (
    <StyledBlock>
      <div className="color" style={{ backgroundColor: color.hex }} />
      <p>{color.name}</p>
      <small>{color.hex}</small>
    </StyledBlock>
  ));
};

const ColorPage = () => {
  return (
    <StyledColorPage>
      <PatternTemplate
        componentName={'Color'}
        code={`import { createGlobalStyle } from 'styled-components';

const ColorPalette = createGlobalStyle\`
  :root {
    --black: #000000;
    --white: #FFFFFF;

    // Primary
    --primary-50: #db0303;
    --primary-100: #ff3939;

    // Secondary
    --secondary-50: #6a0925;
    --secondary-100: #A4133C;

    // Accent
    --accent-50: #ff8800;
    --accent-100: #feba5c;
    
    // Neutral
    --neutral-50: #e9c2ac;
    --neutral-100: #eddcd2;
   
    // Gray
    --gray-50: #8a817c;
    --gray-100: #bcb8b1;
  }

\`;

export default ColorPalette;
`}
      >
        <ul>
          <Block name="--black" hex="000000" />
        </ul>
      </PatternTemplate>
    </StyledColorPage>
  );
};

export default ColorPage;
