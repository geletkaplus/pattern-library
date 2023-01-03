import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import ToolTip from '../components/patterns/ToolTip';
import Button from '../components/patterns/Button';

const ToolTipPage = () => {
  return (
    <PatternTemplate
      componentName={'Tool tip'}
      frameTitle={'Tool tip'}
      height={'60rem'}
    >
      <ToolTip text={'You just opened the tool tip'}>
        <Button buttonText={'Click for more info'}></Button>
      </ToolTip>
    </PatternTemplate>
  );
};

export default ToolTipPage;
