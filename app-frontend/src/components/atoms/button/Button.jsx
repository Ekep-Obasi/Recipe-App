import React from "react";
import StyledButton from "./button.styles";

const Button = ({ variance, text, icon, sx, onClick, type }) => {
  return (
    <StyledButton styles={{ variance, sx }} onClick={onClick} type={type}>
      <span>{icon}</span>
      <span>{text}</span>
    </StyledButton>
  );
};

export default Button;
