import styled from "@emotion/styled";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const StyledLink = styled.span`
  font-weight: 550;

  cursor: pointer;
  ${(props) => {
    if (props.styles.variance === "danger") {
    }
    if (props.styles.variance === "") {
    }
  }}

  ${(props) => props.styles.sx}
`;

const Link = ({ to, text, sx, variance }) => {
  return (
    <RouterLink style={{ textDecoration: "none" }} to={to}>
      <StyledLink styles={{ sx, variance }}>{text}</StyledLink>
    </RouterLink>
  );
};

export default Link;
