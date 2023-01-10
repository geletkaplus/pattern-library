import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import { Nav } from '../components/patterns/Nav';
import Modal from '../components/patterns/Modal';
import styled from 'styled-components';

const StyledLibraryPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const LibraryPage = () => {
  const navList = ['Home', 'Blog', 'About Us'];

  return (
    <StyledLibraryPage>
      <PatternTemplate
        componentName={'Use click outside'}
        description={`Clicking outside a referential element will close it. This hook is useful for dropdowns, modals, etc.

To use it you must import useRef and create a variable named 'wrapperRef' with a value of 'useRef(null)'. 
You then attach 'ref={wrapperRef} to the element you'd like the user to click outside of.

To test, open a modal by clicking below.`}
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
        <Modal toggleText="Click to open a modal">
          Now try clicking outside of the modal to close it.
        </Modal>
      </PatternTemplate>
      <PatternTemplate
        componentName={'Use window size'}
        description={`Returns the size of the window. This hook can be used for rendering elements at varying screen widths. 
        
To use it you should create a variable that calls useWindowSize. The screen width can then be accessed 
using 'variableName.width'.

To test, try resizing your browser and observe the change in the navigation bar.
        `}
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
      >
        <Nav navList={navList} projectName="Example logo" />
      </PatternTemplate>
    </StyledLibraryPage>
  );
};

export default LibraryPage;
