import styled from "@emotion/styled";
import React from "react";

const StyledLink = styled.div`
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

const Link = ({ reference, text, sx, variance }) => {
  return (
    <StyledLink styles={{ sx, variance }} href={reference}>
      {text}
    </StyledLink>
  );
};

export default Link;
