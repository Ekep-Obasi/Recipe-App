import { styled } from "styled-components";

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vw;
  height: 100%;
  width: ${(props) => (props.state ? "20%" : "4%")};
  transition: 0.3s linear width;
  box-sizing: border-box;
  padding: 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

  .menu {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

export default StyledSidebar;
