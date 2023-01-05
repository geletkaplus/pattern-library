import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import styled from 'styled-components';

const StyledBlock = styled.div`
  .color {
    display: flex;
    /* background-color: ${props => parseInt(props.hex)}; */
  }
`;
const Block = ({ name, hex }) => {
  const colors = {
    'black': '#000000',
    'white': '#FFFFFF',
    'primary-50': '#ff0000',
    'primary-100': '#ff3939',
    'secondary-50': '#800F2F',
    'secondary-100': '#A4133C',
    'accent-50': '#ff8800',
    'accent-100': '#ff9500',
    'neutral-50': '#e8d1c5',
    'neutral-100': '#eddcd2',
    'gray-50': '#8a817c',
    'gray-100': '#bcb8b1'
  }

  return (
    {colors.map(color => (
        <StyledBlock>
          <div
            className="color"
            style={{backgroundColor: colors.}}
          />
          <p>{name}</p>
          <small>{hex}</small>
      </StyledBlock>
      ))}
  );
};

const ColorPage = () => {
  return (
    <PatternTemplate componentName={'Color'}>
      <dl>
        <div className="group">
          <Block name="--black" hex="000000" />
        </div>
      </dl>
    </PatternTemplate>
  );
};

export default ColorPage;
