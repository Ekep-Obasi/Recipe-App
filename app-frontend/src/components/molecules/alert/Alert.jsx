import React from "react";
import Button from "../../atoms/button/Button";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { getInView, toggleInView } from "../../../app/features/ui";

const StyledAlert = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 25%;
  min-width: 310px;
  position: absolute;
  bottom: 50px;
  right: ${(props) => (props.visibility ? "25px" : "-120px")};
  opacity: ${(props) => (props.visibility ? 1 : 0)};
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
  font-family: "Inter", sans-serif;
  transition: 0.5s linear all;
  justify-content: space-between;
  align-items: center;
  padding: 0.65rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
`;

const Alert = ({ message }) => {
  const inView = useSelector(getInView);
  const dispatch = useDispatch();
  return (
    <StyledAlert visibility={inView}>
      <span>{message}</span>
      <Button
        text="Undo"
        variance="contained"
        sx={{
          backgroundColor: "#ff5d3e",
          color: "#fff",
          padding: "0.5rem 1.5rem",
          fontWeight: 500,
        }}
        onClick={() => dispatch(toggleInView())}
      />
    </StyledAlert>
  );
};

export default Alert;
