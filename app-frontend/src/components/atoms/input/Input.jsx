import React from "react";
import { StyledInput, StyledInputWrapper } from "./input.styles";

const Input = ({ onChange, text, icon, type }) => {
  return (
    <StyledInputWrapper>
      <span className="icon">{icon}</span>
      <StyledInput onChange={onChange} placeholder={text} type={type} />
    </StyledInputWrapper>
  );
};

export default Input;
