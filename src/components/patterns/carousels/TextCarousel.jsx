import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import HeaderWithLine from '../headers/HeaderWithLine';
import left from '../../../images/left-white-caret.svg';
import right from '../../../images/right-white-caret.svg';
import styled from 'styled-components';

const StyledTextCarousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 3rem 0;
  background-color: gray;

  .carousel {
    overflow: hidden;
    position: relative;
  }

  .inner {
    white-space: nowrap;
    transition: transform 0.3s;
  }

  button.right,
  button.left {
    padding: 0;
    border: none;
    cursor: pointer;
    position: absolute;
    background: gray;
    top: 5rem;
  }

  button.right {
    right: 5%;
  }

  button.left {
    left: 5%;
  }
`;

const StyledCarouselItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: gray;
  color: white;
  width: 100%;

  .inner-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
    gap: 4.625rem;
    white-space: pre-wrap;
  }

  p {
    text-align: center;
    padding: 0 7.5163rem;
  }

  cite {
    text-align: center;
  }

  @media only screen and (max-width: 650px) {
    p {
      padding: 0 3rem;
    }
  }
`;

export const TextCarouselItem = ({ quote, citation }) => {
  return (
    <StyledCarouselItem>
      <blockquote className="inner-wrapper">
        <p className="heading-m-light">{quote}</p>
        <cite className="body-m-regular">{citation}</cite>
      </blockquote>
    </StyledCarouselItem>
  );
};

const TextCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(true);

  const updateIndex = newIndex => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 300000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <StyledTextCarousel>
      <HeaderWithLine h4 text={'Carousel Header'} />
      <div
        {...handlers}
        className="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child);
          })}
        </div>
        <button
          className="left"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <img src={left} alt="previous slide" />
        </button>
        <button
          className="right"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <img src={right} alt="next slide" />
        </button>
      </div>
    </StyledTextCarousel>
  );
};

export default TextCarousel;
