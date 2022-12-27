import React from 'react';
import styled from 'styled-components';

const StyledFullWidthVideo = styled.video`
  margin: 0 auto;
  display: block;
  background-color: #ccc;
  width: 100%;
  height: auto;
  z-index: -1;
`;

const FullWidthVideo = ({ video }) => {
  return (
    video && (
      <StyledFullWidthVideo src={video} autoPlay loop muted playsInline />
    )
  );
};
export default FullWidthVideo;
