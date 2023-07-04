import React from "react";
import StyledButton from "./button.styles";

const Button = ({ variance, text, icon, sx, onClick }) => {
  return (
    <StyledButton styles={{ variance, sx }} onClick={onClick}>
      <span>{icon}</span>
      <span>{text}</span>
    </StyledButton>
  );
};

export default Button;
