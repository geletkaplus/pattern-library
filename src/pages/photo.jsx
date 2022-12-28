import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import FullWidthPhoto from '../components/patterns/FullWidthPhoto';

const PhotoPage = () => {
  return (
    <PatternTemplate
      componentName={'Full width photo'}
      frameTitle={'Full width photo'}
      height={'60rem'}
    >
      <FullWidthPhoto altText={'this is photo'} />
    </PatternTemplate>
  );
};

export default PhotoPage;
