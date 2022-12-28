import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import Card from '../components/patterns/Card';

const CardPage = () => {
  return (
    <PatternTemplate
      componentName={'Card'}
      frameTitle={'Card'}
      height={'60rem'}
    >
      <Card
        heading={'Heading'}
        content={'Content'}
        link={'/'}
        linkText={'text'}
        imageDescription={'image description'}
      ></Card>
    </PatternTemplate>
  );
};

export default CardPage;
