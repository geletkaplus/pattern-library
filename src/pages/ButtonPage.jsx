import React from "react";
import Layout from "../components/layout";
import PatternTemplate from "../components/PatternTemplate";
import Button from "../components/patterns/Button";
import CodeSnippet from "../components/CodeSnippet";

const ButtonPage = () => {
  return (
    <PatternTemplate
      componentName={"Button"}
      frameTitle={"button"}
      src={
        "https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0%29&t=3024-night&wt=none&l=jsx&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=import%2520React%2520from%2520%2522react%2522%253B%250Aimport%2520styled%2520from%2520%2522styled-components%2522%253B%250A%250Aconst%2520StyledButton%2520%253D%2520styled.button%2560%250A%2520%2520display%253A%2520inline-block%253B%250A%2520%2520border-radius%253A%252018px%253B%250A%2520%2520padding%253A%25200.5rem%25201.5rem%253B%250A%2520%2520width%253A%25209rem%253B%250A%2520%2520font-weight%253A%2520700%253B%250A%2520%2520vertical-align%253A%2520center%253B%250A%2520%2520font-size%253A%25200.9rem%253B%250A%250A%2520%2520%2526%253Ahover%2520%257B%250A%2520%2520%2520%2520cursor%253A%2520pointer%253B%250A%2520%2520%257D%250A%250A%2520%2520%2526%253Aactive%2520%257B%250A%2520%2520%2520%2520transform%253A%2520translateY%282px%29%253B%250A%2520%2520%257D%250A%2560%253B%250A%250Aconst%2520Button%2520%253D%2520%28%257B%250A%2520%2520buttonText%252C%250A%2520%2520background%252C%250A%2520%2520color%252C%250A%2520%2520border%252C%250A%2520%2520fontFamily%252C%250A%2520%2520margin%252C%250A%257D%29%2520%253D%253E%2520%257B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253CStyledButton%2520style%253D%257B%257B%2520background%252C%2520color%252C%2520border%252C%2520fontFamily%252C%2520margin%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%257BbuttonText%257D%250A%2520%2520%2520%2520%253C%252FStyledButton%253E%250A%2520%2520%29%253B%250A%257D%253B%250A%250Aexport%2520default%2520Button%253B"
      }
      height={"60rem"}
    >
      <div style={{ paddingLeft: 4 + "rem" }}>
        <Button
          background={"transparent"}
          color={"red"}
          border={"2px solid red"}
          fontFamily={"monospace"}
          margin={"0"}
          buttonText={"Button text"}
        />
      </div>
    </PatternTemplate>
  );
};

export default ButtonPage;
