import { styled } from "styled-components";

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.color.random.darkgrey};
  padding: 0.2rem;
  height: 3rem;
  width: 100%;
  padding: 0 0 0 2.5rem;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily[0]};
  transition: 0.3s ease-in-out border-bottom;

  &::placeholder {
    color: ${(props) => props.theme.color.random.darkgrey};
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #000;
  }
`;

const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  margin: auto;

  .icon {
    color: ${(props) => props.theme.color.random.darkgrey};
    position: absolute;
    top: 50%;
    left: 3%;
    transform: translate(-50%, -50%);
  }
`;

export { StyledInput, StyledInputWrapper };
