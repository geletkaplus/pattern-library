import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledGeletkaHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0 4rem 0;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    letter-spacing: 1.875rem;
    text-transform: uppercase;
    margin: 0;

    a {
      color: black;
      text-decoration: none;
    }
  }

  #input-cursor {
    font-size: 2.875rem;
    font-weight: 400;
    vertical-align: center;
    margin-left: -1rem;
    display: inline-block;
    animation: blink 0.6s linear infinite alternate;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    45% {
      opacity: 1;
    }
    55% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

const GeletkaHeader = () => {
  const [complete, setComplete] = useState(false);

  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split('');
    let i = 0;
    while (i < letters.length) {
      await waitForMs(delay);
      if (document !== undefined) {
        if (document.getElementById(eleRef).innerHTML !== sentence) {
          document.getElementById(eleRef).append(letters[i]);
          i++;
        }
      }
    }
    return;
  }

  typeSentence('G+ Pattern Library', 'sentence');

  return (
    <StyledGeletkaHeader>
      <h1>
        <Link id="sentence" to="/" />
        <span id="input-cursor">|</span>
      </h1>
    </StyledGeletkaHeader>
  );
};

export default GeletkaHeader;
