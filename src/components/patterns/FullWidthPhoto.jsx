import React from 'react';
import styled from 'styled-components';

const StyledFullWidthPhoto = styled.img`
  width: 100%;
  margin: 0 auto;
  object-fit: fill;

  @media (max-width: 750px) {
    width: 100%;
    height: 25rem;
    object-fit: cover;
  }
`;

const FullWidthPhoto = ({ imageSrc, altText }) => {
  return imageSrc && <StyledFullWidthPhoto src={imageSrc} alt={altText} />;
};
export default FullWidthPhoto;
