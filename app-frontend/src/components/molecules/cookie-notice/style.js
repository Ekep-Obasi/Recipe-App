import styled from "@emotion/styled";

const CookieWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 2rem;
  height: fit-content;
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  width: 76%;
  background-color: #fff;
  border-radius: 8px;
  text-align: left;
  opacity: ${(props) => (props.visiblity ? 1 : 0)};
  transform: ${(props) =>
    props.visiblity ? "translateY(0)" : "translateY(-250px)"};
  transition: 0.4s ease-out all;

  h1 {
    font-family: "Playfair Display", serif;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  padding: 1rem;
  display: flex;
  justify-content: center;
  visibility: ${(props) => (props.visiblity ? "visible" : "hidden")};
  transition: 0.4s ease-in-out all;
  box-sizing: border-box;
`;

export { CookieWrapper, Overlay };
