import React from 'react';
import PatternTemplate from '../components/PatternTemplate';
import RadioButton from '../components/patterns/inputs/RadioButton';
import Checkbox from '../components/patterns/inputs/Checkbox';
import TextArea from '../components/patterns/inputs/TextArea';
import TextInput from '../components/patterns/inputs/TextInput';
import styled from 'styled-components';

const StyledInputsPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputsPage = () => {
  return (
    <StyledInputsPage>
      <PatternTemplate
        componentName={'Radio button'}
        frameTitle={'Radio button'}
        height={'60rem'}
      >
        <RadioButton label={'This is a radio button'} name={'example'} />
        <RadioButton label={'This is another one'} name={'example'} />
      </PatternTemplate>

      <PatternTemplate
        componentName={'Checkbox'}
        frameTitle={'Checkbox'}
        height={'60rem'}
      >
        <Checkbox label={'This is a checkbox'} />
      </PatternTemplate>

      <PatternTemplate
        componentName={'Text area'}
        frameTitle={'Text area'}
        height={'60rem'}
      >
        <TextArea label={'This is a text area'} />
      </PatternTemplate>

      <PatternTemplate
        componentName={'Text input'}
        frameTitle={'Text input'}
        height={'60rem'}
      >
        <TextInput label="This is a text input" />
      </PatternTemplate>
    </StyledInputsPage>
  );
};

export default InputsPage;
