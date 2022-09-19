import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 18px;
  padding: 0.5rem 1.5rem;
  width: 9rem;
  font-weight: 700;
  vertical-align: center;
  font-size: 0.9rem;


  &:hover {
    cursor: pointer;

  }

  &:active {
    transform: translateY(2px);
  }
}
`;

const Button = ({
  buttonText,
  background,
  color,
  border,
  fontFamily,
  margin,
}) => {
  return (
    <StyledButton style={{ background, color, border, fontFamily, margin }}>
      {buttonText}
    </StyledButton>
  );
};

export default Button;
