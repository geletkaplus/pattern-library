import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import Accordion from '../components/patterns/Accordion';

const AccordionPage = () => {
  const accordionListExample = [
    {
      title: 'Title 1',
      content:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus similique nostrum voluptatem temporibus, quae at eaque quasi? Aliquid maxime, error soluta voluptate voluptatibus impedit optio illum perspiciatis esse nesciunt tempore!',
    },
    {
      title: 'Title 2',
      content:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus similique nostrum voluptatem temporibus, quae at eaque quasi? Aliquid maxime, error soluta voluptate voluptatibus impedit optio illum perspiciatis esse nesciunt tempore!',
    },
    {
      title: 'Title 3',
      content:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus similique nostrum voluptatem temporibus, quae at eaque quasi? Aliquid maxime, error soluta voluptate voluptatibus impedit optio illum perspiciatis esse nesciunt tempore!',
    },
  ];
  return (
    <PatternTemplate
      componentName={'Button'}
      frameTitle={'button'}
      height={'60rem'}
    >
      <Accordion accordionList={accordionListExample} />
    </PatternTemplate>
  );
};

export default AccordionPage;
