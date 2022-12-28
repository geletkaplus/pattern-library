import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import useClickOutside from '../lib/useClickOutside';

const LibraryPage = () => {
  return (
    <PatternTemplate
      componentName={'Library'}
      frameTitle={'Library'}
      height={'60rem'}
    >
      <div style={{ paddingLeft: 4 + 'rem' }}></div>
    </PatternTemplate>
  );
};

export default LibraryPage;
