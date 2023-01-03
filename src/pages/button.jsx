import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import Button from '../components/patterns/Button';
import styled from 'styled-components';

const StyledButtonPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ButtonPage = () => {
  return (
    <StyledButtonPage>
      <PatternTemplate
        componentName={'Internal link button'}
        frameTitle={'Internal link button'}
        height={'60rem'}
      >
        <Button link="/" buttonText={'Internal link Button'} />
      </PatternTemplate>
      <PatternTemplate
        componentName={'External link button'}
        frameTitle={'External link button'}
        height={'60rem'}
      >
        <Button
          link="https://www.ctvnews.ca/polopoly_fs/1.4692721.1574189694!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"
          buttonText={'External link button'}
        />
      </PatternTemplate>
      <PatternTemplate
        componentName={'Primary button'}
        frameTitle={'Primary button'}
        height={'60rem'}
      >
        <Button
          func={() => alert('You just clicked the primary button')}
          buttonText={'Primary Button'}
        />
      </PatternTemplate>
      <PatternTemplate
        componentName={'Secondary button'}
        frameTitle={'Secondary button'}
        height={'60rem'}
      >
        <Button
          secondary
          func={() => alert('You just clicked the secondary button')}
          buttonText={'Secondary Button'}
        />
      </PatternTemplate>
      <PatternTemplate
        componentName={'Primary clear button'}
        frameTitle={'Primary clear button'}
        height={'60rem'}
      >
        <Button
          clear
          func={() => alert('You just clicked the primary clear button')}
          buttonText={'Primary clear Button'}
        />
      </PatternTemplate>
      <PatternTemplate
        componentName={'Secondary clear button'}
        frameTitle={'Secondary clear button'}
        height={'60rem'}
      >
        <Button
          clear
          secondary
          func={() => alert('You just clicked the secondary clear button')}
          buttonText={'Secondary clear Button'}
        />
      </PatternTemplate>
    </StyledButtonPage>
  );
};

export default ButtonPage;
