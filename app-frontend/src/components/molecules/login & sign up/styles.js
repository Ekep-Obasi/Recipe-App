import { styled } from "styled-components";

const StyledFormModal = styled.div`
  width: 33.3%;
  min-width: 320px;
  height: fit-content;
  min-height: 475px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  gap: 2px;
  text-align: left;
  transition: 0.5s ease-in-out all;
  scale: ${(props) => (props.visiblity ? 1 : 0)};
  background: ${(props) => props.theme.backgroundShadow};
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: 1rem;
  @media screen and (max-width: 350px) {
    padding: 0.5rem 1rem;
  }

  .exit-button {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  h1 {
    font-family: ${(props) => props.theme.fontFamily[1]};
    margin: 0;
    padding: 0;
  }

  .input-feilds {
    display: flex;
    gap: 25px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
  }

  .forgot-pswd {
    display: flex;
    justify-content: end;
    width: 100%;
  }

  .action-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 100%;
    padding: 15px 0;
  }

  .passport {
    display: flex;
    width: 80%;
    min-width: fit-content;
    gap: 10px;
    justify-content: space-between;
  }

  .link-to-signup {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .term-and-conditions {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.visiblity ? "visible" : "hidden")};
  transition: 0.5s ease-in-out all;
  box-sizing: border-box;
`;

export { Overlay, StyledFormModal };
