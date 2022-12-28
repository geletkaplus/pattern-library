import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import Nav from '../components/patterns/Nav';

const NavPage = () => {
  return (
    <PatternTemplate componentName={'Nav'} frameTitle={'Nav'} height={'60rem'}>
      <Nav />
    </PatternTemplate>
  );
};

export default NavPage;
