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
  const example = message => {
    console.log(message);
  };
  return (
    <StyledButtonPage>
      <PatternTemplate
        componentName={'External link button'}
        frameTitle={'External link button'}
        height={'60rem'}
      >
        <Button
          link="https://www.ctvnews.ca/polopoly_fs/1.4692721.1574189694!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"
          buttonText={'Link button'}
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
    </StyledButtonPage>
  );
};

export default ButtonPage;
