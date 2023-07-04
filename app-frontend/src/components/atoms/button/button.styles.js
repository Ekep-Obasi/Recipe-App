import styled from "@emotion/styled";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  gap: 5px;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;

  // Variance: Contained
  ${(props) =>
    props.styles.variance === "contained" &&
    `
    background-color: ${props.styles.sx?.backgroundColor || " #2196F3"};
    `}

  // Variance: Text
  ${(props) =>
    props.styles.variance === "text" &&
    `
    background-color: transparent;
    `}

  // Variance: Outlined
  ${(props) =>
    props.styles.variance === "outlined" &&
    `
    border: 2px solid ${props.styles.sx?.borderColor || " #2196F3"};
    `}


  // Overwrite styles
  ${(props) => props.styles.sx && props.styles.sx}
`;

export default StyledButton;
