import React from "react";
import { styled } from "styled-components";

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: purple;
  color: #fff;
  font-size: 2rem;
  font-family: ${(props) => props.theme.fontFamily[0]};
`;

const ProfileImage = ({ acrony }) => {
  return <StyledImage>A</StyledImage>;
};

export default ProfileImage;
