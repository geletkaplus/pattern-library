import React from 'react';
import Carousel, { CarouselItem } from '../components/patterns/Carousel';
import image from '../images/image-3.jpg';
import PatternTemplate from '../components/PatternTemplate';

const CarouselPage = () => {
  const imageData = [
    {
      image: '../images/image-1.jpg',
      alt: 'cat 1',
    },
    {
      image: '.ooooll./images/image-2.jpg',
      alt: 'cat 2',
    },
    {
      image: '../images/image-3.jpg',
      alt: 'cat 3',
    },
    {
      image: '../images/image-4.jpg',
      alt: 'cat 4',
    },
  ];

  return (
    <PatternTemplate
      componentName={'Carousel'}
      frameTitle={'Carousel'}
      height={'60rem'}
    >
      <Carousel>
        <CarouselItem>
          <img src={image} />
        </CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    </PatternTemplate>
  );
};

export default CarouselPage;
