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
  gap: 4rem;
`;

const InputsPage = () => {
  return (
    <StyledInputsPage>
      <PatternTemplate
        componentName={'Radio button'}
        code={`import React from 'react';
import styled from 'styled-components';

const StyledRadioButton = styled.label\`\`;

const RadioButton = ({ label, value, name }) => {
  return (
    <StyledRadioButton>
      <input type={'radio'} value={value ? value : label} name={name} />
      {label}
    </StyledRadioButton>
  );
};
export default RadioButton;
`}
      >
        <RadioButton label={'This is a radio button'} name={'example'} />
        <RadioButton label={'This is another one'} name={'example'} />
      </PatternTemplate>

      <PatternTemplate
        componentName={'Checkbox'}
        code={`import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.label\`\`;

const Checkbox = ({ label }) => {
  return (
    <StyledCheckbox>
      <input type={'checkbox'} />
      {label}
    </StyledCheckbox>
  );
};
export default Checkbox;
`}
      >
        <Checkbox label={'This is a checkbox'} />
      </PatternTemplate>

      <PatternTemplate
        componentName={'Text area'}
        code={`import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.label\`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  textarea {
    resize: none;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 0.5rem 1rem;
    font-size: 1rem;

    :active {
      border: none;
      outline: none;
    }
  }
\`;

const TextArea = ({ label }) => {
  return (
    <StyledTextArea>
      {label}
      <textarea />
    </StyledTextArea>
  );
};
export default TextArea;
`}
      >
        <TextArea label={'This is a text area'} />
      </PatternTemplate>

      <PatternTemplate
        componentName={'Text input'}
        code={`import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.label\`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    border-radius: 5px;
    border: 1px solid gray;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
\`;

const TextInput = ({ label }) => {
  return (
    <StyledTextInput>
      {label}
      <input type={'text'} />
    </StyledTextInput>
  );
};
export default TextInput;
`}
      >
        <TextInput label="This is a text input" />
      </PatternTemplate>
    </StyledInputsPage>
  );
};

export default InputsPage;
