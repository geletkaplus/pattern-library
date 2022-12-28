import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';

const StyledCarousel = styled.div`
  .carousel {
    overflow: hidden;
  }

  .inner {
    white-space: nowrap;
    transition: transform 0.3s;
  }

  .carousel-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 10rem;
    background: gray;
    color: white;
    width: 100%;
    height: 25rem;

    img {
      object-fit: cover;
      overflow: hidden;
      height: 100%;
      width: 100%;
    }
  }

  .indicators {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
  }

  .indicators button {
    padding: 0;
    border: none;
    background: white;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  .num-container > button {
    padding: 0.5rem;
    border-radius: 5px;
  }

  .num-container > button.active {
    background-color: red;
    color: #fff;
  }
`;

export const CarouselItem = ({ children }) => {
  return <div className="carousel-item">{children}</div>;
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

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
    }, 3000);

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
    <StyledCarousel>
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
        <div className="indicators">
          <button
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            PREV
          </button>
          <div className="num-container">
            {React.Children.map(children, (child, index) => {
              return (
                <button
                  className={`${index === activeIndex ? 'active' : ''}`}
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            NEXT
          </button>
        </div>
      </div>
    </StyledCarousel>
  );
};

export default Carousel;

// const Carousel = ({ slides }) => {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent(current === 0 ? slides.length - 1 : current - 1);
//   };

//   const nextSlide = () => {
//     setCurrent(current === slides.length - 1 ? 0 : current + 1);
//   };

//   return (
//     <StyledCarousel>
//       <div className="slide-container">
//         {slides.map((slide, index) => {
//           return (
//             <div key={index}>
//               {index === current && (
//                 <img
//                   className="slide-image"
//                   src={slide.image}
//                   alt={slide.alt}
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>
//       <div className="arrows-container">
//         <div className="arrow" onClick={prevSlide}>
//           Left
//         </div>
//         <div className="arrow" onClick={nextSlide}>
//           Right
//         </div>
//       </div>
//     </StyledCarousel>
//   );
// };
// export default Carousel;
