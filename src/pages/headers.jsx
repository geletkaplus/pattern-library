import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import HeaderWithLine from '../components/patterns/headers/HeaderWithLine';

const HeadersPage = () => {
  return (
    <PatternTemplate
      componentName={'Header with line'}
      description={`Styled header that requires the markup (h2, h3, or h4) to be passed in order to be rendered. Allows the styling to remain without sacrificing semantic HTML.
      
PROPS: { text, h2, h3, h4 }`}
      code={`
import React from 'react';
import styled from 'styled-components';

const StyledHeaderWithLine = styled.div\`
  h2,
  h3,
  h4 {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid black;
    margin: 2rem 0;
    line-height: 0.1;
    text-transform: uppercase;
    color: black;
    font-size: 2rem;
  }

  h2 > span,
  h3 > span,
  h4 > span {
    background: white;
    padding: 0 2rem;
  }
\`;

const HeaderWithLine = ({ text, h2, h3, h4 }) => {
  return (
    <StyledHeaderWithLine>
      {/* MUST DECLARE TYPE OF HEADING TO USE */}
      {h2 && (
        <h2>
          <span>{text}</span>
        </h2>
      )}

      {h3 && (
        <h3>
          <span>{text}</span>
        </h3>
      )}

      {h4 && (
        <h4>
          <span>{text}</span>
        </h4>
      )}
    </StyledHeaderWithLine>
  );
};

export default HeaderWithLine;

    `}
    >
      <HeaderWithLine h3 text="Header" />
    </PatternTemplate>
  );
};

export default HeadersPage;
