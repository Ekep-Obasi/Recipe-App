import { styled } from "styled-components";

const StyledCommentSection = styled.div`
  width: 100%;

  .create-comment {
    display: flex;
    width: 100%;
    gap: 10px;

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: right;

      input {
        width: 100%;
        border: none;
        border-bottom: 1px solid black;
        padding: 0.25rem;
        font: 1rem;
        font-family: ${(props) => props.theme.fontFamily[0]};
        font-size: 1rem;
        margin-bottom: 5px;

        &:focus {
          outline: none;
          margin-bottom: 5.5px;
        }

        &::placeholder {
          font-size: 1rem;
        }
      }

      .button {
        display: flex;
        align-self: flex-end;
        gap: 10px;
      }
    }
  }
`;

const StyledComment = styled.div`
  display: flex;
  padding: 1rem 0;

  .other-info {
    font-family: ${(props) => props.theme.fontFamily[0]};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;

    .name {
      display: flex;
    }

    .likes-dislikes {
      display: flex;
    }
  }
`;

export { StyledCommentSection, StyledComment };
