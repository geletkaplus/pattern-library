import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import ToolTip from '../components/patterns/ToolTip';

const ToolTipPage = () => {
  return (
    <PatternTemplate
      componentName={'Tool tip'}
      frameTitle={'Tool tip'}
      height={'60rem'}
    >
      <ToolTip text={'heloooo'}>hello</ToolTip>
    </PatternTemplate>
  );
};

export default ToolTipPage;
