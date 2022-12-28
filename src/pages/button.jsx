import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import Button from '../components/patterns/Button';
import CodeSnippet from '../components/CodeSnippet';

const ButtonPage = () => {
  const example = message => {
    console.log(message);
  };
  return (
    <PatternTemplate
      componentName={'Button'}
      frameTitle={'button'}
      height={'60rem'}
    >
      <Button
        link="https://www.ctvnews.ca/polopoly_fs/1.4692721.1574189694!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"
        buttonText={'Link button'}
      />
      <Button
        func={() => alert('You just clicked the primary button')}
        buttonText={'Primary Button'}
      />
      <Button
        secondary
        func={() => alert('You just clicked the secondary button')}
        buttonText={'Secondary Button'}
      />
    </PatternTemplate>
  );
};

export default ButtonPage;
