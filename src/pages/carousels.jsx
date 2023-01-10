import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import TextCarousel, {
  TextCarouselItem,
} from '../components/patterns/TextCarousel';
import ImageCarousel, {
  ImageCarouselItem,
} from '../components/patterns/ImageCarousel';
import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.jpg';
import image3 from '../images/image-3.jpg';
import image4 from '../images/image-4.jpg';
import styled from 'styled-components';

const StyledCarouselsPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const CarouselsPage = () => {
  return (
    <StyledCarouselsPage>
      <PatternTemplate
        componentName={'Image Carousel'}
        code={`
        import React, { useEffect, useState } from 'react';
        import { useSwipeable } from 'react-swipeable';
        import styled from 'styled-components';
        
        const StyledImageCarousel = styled.div\`
          .carousel {
            overflow: hidden;
          }
        
          .inner {
            white-space: nowrap;
            transition: transform 0.3s;
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
        \`;
        
        const StyledCarouselItem = styled.div\`
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
        \`;
        
        export const ImageCarouselItem = ({ children }) => {
          return <StyledCarouselItem>{children}</StyledCarouselItem>;
        };
        
        const ImageCarousel = ({ children }) => {
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
            <StyledImageCarousel>
              <div
                {...handlers}
                className="carousel"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div
                  className="inner"
                  style={{ transform: \`translateX(-\${activeIndex * 100}%)\` }}
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
                          className={\`\${index === activeIndex ? 'active' : ''}\`}
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
            </StyledImageCarousel>
          );
        };
        
        export default ImageCarousel;
        
      `}
      >
        <ImageCarousel>
          <ImageCarouselItem>
            <img src={image1} alt="image 1" />
          </ImageCarouselItem>
          <ImageCarouselItem>
            <img src={image2} alt="image 2" />
          </ImageCarouselItem>
          <ImageCarouselItem>
            <img src={image3} alt="image 3" />
          </ImageCarouselItem>
          <ImageCarouselItem>
            <img src={image4} alt="image 4" />
          </ImageCarouselItem>
        </ImageCarousel>
      </PatternTemplate>

      <PatternTemplate
        componentName="Text Carousel"
        code={`
        import React, { useEffect, useState } from 'react';
        import { useSwipeable } from 'react-swipeable';
        import HeaderWithLine from './HeaderWithLine';
        import left from '../../images/left-white-caret.svg';
        import right from '../../images/right-white-caret.svg';
        import styled from 'styled-components';
        
        const StyledTextCarousel = styled.div\`
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
        \`;
        
        const StyledCarouselItem = styled.div\`
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
        \`;
        
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
                  style={{ transform: \`translateX(-\${activeIndex * 100}%)\` }}
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
        
      `}
      >
        <TextCarousel>
          <TextCarouselItem
            quote="“This is the best pattern library ever.”"
            citation="Doug Leinen, Chief Code Extraordinaire"
          />
          <TextCarouselItem
            quote="“This is another quote used as an example.”"
            citation="Abraham Lincoln"
          />
          <TextCarouselItem
            quote="“What an amazing testimonial carousel.”"
            citation="John Geletka"
          />
        </TextCarousel>
      </PatternTemplate>
    </StyledCarouselsPage>
  );
};

export default CarouselsPage;
