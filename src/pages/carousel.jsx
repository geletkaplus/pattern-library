import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import Carousel, { CarouselItem } from '../components/patterns/Carousel';
import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.jpg';
import image3 from '../images/image-3.jpg';
import image4 from '../images/image-4.jpg';

const CarouselPage = () => {
  return (
    <PatternTemplate
      componentName={'Carousel'}
      frameTitle={'Carousel'}
      height={'60rem'}
    >
      <Carousel>
        <CarouselItem>
          <img src={image1} />
        </CarouselItem>
        <CarouselItem>
          <img src={image2} />
        </CarouselItem>
        <CarouselItem>
          <img src={image3} />
        </CarouselItem>
        <CarouselItem>
          <img src={image4} />
        </CarouselItem>
      </Carousel>
    </PatternTemplate>
  );
};

export default CarouselPage;
