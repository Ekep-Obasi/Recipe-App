import React from "react";
import { StyledInput, StyledInputWrapper } from "./input.styles";

const Input = ({ onChange, text, icon, type, name, value }) => {
  return (
    <StyledInputWrapper>
      <span className="icon">{icon}</span>
      <StyledInput
        onChange={onChange}
        placeholder={text}
        type={type}
        name={name}
        value={value}
        required
      />
    </StyledInputWrapper>
  );
};

export default Input;
