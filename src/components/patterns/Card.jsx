import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledCard = styled.article`
  .info {
    display: flex;
    flex-direction: column;
  }
`;

const Card = ({
  heading,
  content,
  link,
  linkText,
  imageSrc,
  imageDescription,
}) => {
  return (
    <StyledCard>
      {imageSrc && (
        <div className="image-container">
          <img src={imageSrc} alt={imageDescription} />
        </div>
      )}
      <div className="info">
        {heading && <h3>{heading}</h3>}
        {content && <p>{content}</p>}
        {link && linkText && <Link to={link}>{linkText}</Link>}
      </div>
    </StyledCard>
  );
};

export default Card;
