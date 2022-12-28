import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 10rem;
  gap: 1rem;
  border: 1px solid gray;
  border-radius: 5px;

  /* .right-arrow,
  .left-arrow {
    position: absolute;
    top: 50%;
    font-size: 2rem;
  } */

  /* .right-arrow {
    right: 1.5rem;
  }

  .left-arrow {
    left: 1.5rem;
  } */

  .slide-image {
    object-fit: cover;
    display: flex;
    width: 100%;
  }

  .arrows-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .arrow {
    padding: 0.5rem;
  }
`;

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <StyledCarousel>
      <div className="slide-container">
        {slides.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && (
                <img
                  className="slide-image"
                  src={slide.image}
                  alt={slide.alt}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="arrows-container">
        <div className="arrow" onClick={prevSlide}>
          Left
        </div>
        <div className="arrow" onClick={nextSlide}>
          Right
        </div>
      </div>
    </StyledCarousel>
  );
};
export default Carousel;
