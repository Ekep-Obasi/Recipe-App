import React from "react";
import { styled } from "styled-components";

const StyledErrorPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily[0]};
`;

const NotFound = ({ errorCode, message }) => {
  return (
    <StyledErrorPage>
      <h3>
        Container
        <bold>{errorCode} </bold> || {message}
      </h3>
    </StyledErrorPage>
  );
};

export default NotFound;
