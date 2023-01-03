import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import Button from '../components/patterns/Button';
import CodeSnippet from '../components/CodeSnippet';

const ButtonPage = () => {
  return (
    <PatternTemplate
      componentName={'Button'}
      frameTitle={'button'}
      height={'60rem'}
    >
      <Button link="#" buttonText={'Link button'} />
      <Button
        func={() => console.log('Primary button clicked')}
        buttonText={'Primary Button'}
      />
      <Button
        secondary
        func={() => console.log('Secondary button clicked')}
        buttonText={'Secondary Button'}
      />
      <Button
        clear
        func={() => console.log('Secondary button clicked')}
        buttonText={'Secondary Button'}
      />
      <Button
        secondary
        clear
        func={() => console.log('Secondary button clicked')}
        buttonText={'Secondary Button'}
      />
    </PatternTemplate>
  );
};

export default ButtonPage;
