import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import { Nav } from '../components/patterns/Nav';

const NavPage = () => {
  const navList = ['Home', 'Blog', 'About Us'];
  return (
    <PatternTemplate componentName={'Nav'} frameTitle={'Nav'} height={'60rem'}>
      <Nav navList={navList} projectName="Example logo" />
    </PatternTemplate>
  );
};

export default NavPage;
