import React, { useState } from 'react';
import downArrow from '../../images/down-arrow.svg';
import rightArrow from '../../images/right-arrow.svg';
import styled from 'styled-components';

const StyledAccordion = styled.dl`
  max-width: 72.375rem;
  margin: 4.25rem auto;

  dt {
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    /* background: var(--light-gray);
      border: 1px solid var(--gray); */
    padding: 1.625rem 1.875rem;
    cursor: pointer;

    :hover {
      /* background-color: var(--primary); */
    }
  }

  dd {
    padding: 2.625rem 5.375rem;
    border: 1px solid var(--gray);
    border-top: none;
    border-bottom: none;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    :last-of-type {
      border-bottom: 1px solid var(--gray);
    }

    p {
      margin: 0;
      padding: 0;
    }
  }

  @media (max-width: 750px) {
    margin: 1.5rem;

    dt {
      div {
        line-height: 1.625rem;
        font-size: 1.5rem;
      }
    }

    dd {
      padding: 1.75rem;
      line-height: 1.25rem;
    }
  }
`;

const Accordion = ({ accordionList }) => {
  const [open, setOpen] = useState(accordionList.map(accordion => false));
  const [focused, setFocused] = useState(accordionList.map(accordion => false));

  const toggleAccordion = idx => {
    setOpen({ ...open, [idx]: !open[idx] });
  };

  const handleKeyboardListener = (e, idx) => {
    if (e.key === ' ' && focused[idx]) {
      e.preventDefault();
      let newOpen = open;
      newOpen[idx] = !open[idx];
      setOpen(newOpen);
    }
  };

  const handleFocus = (e, idx) => {
    let newFocused = focused;
    newFocused[idx] = !focused[idx];
    setFocused(newFocused);
  };

  return (
    <StyledAccordion>
      {accordionList.map((acc, idx) => (
        <React.Fragment key={idx}>
          <dt
            onClick={() => toggleAccordion(idx)}
            onKeyDown={e => handleKeyboardListener(e, idx)}
            onFocus={e => handleFocus(e, idx)}
            onBlur={e => handleFocus(e, idx)}
            aria-expanded={open[idx]}
            tabIndex={'0'}
            role="button"
          >
            {acc.title}{' '}
            {open[idx] ? (
              <img src={downArrow} alt="collapse accordion" />
            ) : (
              <img src={rightArrow} alt="open accordion" />
            )}
          </dt>
          {open[idx] && <dd>{acc.content}</dd>}
        </React.Fragment>
      ))}
    </StyledAccordion>
  );
};
export default Accordion;
