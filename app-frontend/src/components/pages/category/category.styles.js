import { styled } from "styled-components";

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10%;

  h1 {
    font-family: ${(props) => props.theme.fontFamily[1]};
    font-size: 2rem;
    text-align: left;
    border-bottom: 1px solid ${(props) => props.theme.color.random.lightgrey};
  }

  @media screen and (max-width: 480px) {
    padding: 2%;
  }
`;

export { StyledCategory };
