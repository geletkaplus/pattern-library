import React, { useState } from 'react';
import PatternTemplate from '../components/PatternTemplate';
import useClickOutside from '../lib/useClickOutside';
import useWindowSize from '../lib/useWindowSize';
import Modal from '../components/patterns/Modal';
import styled from 'styled-components';

const StyledLibraryPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const LibraryPage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <StyledLibraryPage>
      <PatternTemplate
        componentName={'Use click outside'}
        code={`import { useEffect } from 'react';

const useClickOutside = (ref, closeInput) => {
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        closeInput();
        // stopPropagation is optional -- remove if breaking
        e.stopPropagation();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export default useClickOutside;
`}
      >
        <Modal toggleText="Click to open a modal" closeText="Close">
          Now try clicking outside of the modal to close it.
        </Modal>
      </PatternTemplate>
      <PatternTemplate
        componentName={'Use window size'}
        code={`import { useState, useEffect } from 'react';

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
`}
      ></PatternTemplate>
    </StyledLibraryPage>
  );
};

export default LibraryPage;
