import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import CallToAction from '../components/patterns/CallToAction';

const CallToActionPage = () => {
  return (
    <PatternTemplate
      componentName={'Button'}
      frameTitle={'button'}
      height={'60rem'}
    >
      <CallToAction title={'Call to Action Title'} />
      <p>Call to action content</p>
      <CallToAction />
    </PatternTemplate>
  );
};

export default CallToActionPage;
