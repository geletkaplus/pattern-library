import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import FullWidthVideo from '../components/patterns/FullWidthVideo';

const VideoPage = () => {
  return (
    <PatternTemplate
      componentName={'Full width video'}
      frameTitle={'Full width video'}
      height={'60rem'}
    >
      <FullWidthVideo />
    </PatternTemplate>
  );
};

export default VideoPage;
