import styled from "@emotion/styled";

const StyledDropDown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;

  .title {
    display: flex;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
  }

  .dropdown-icon {
    vertical-align: baseline;
  }

  .dropdown {
    width: 100%;
    display: flex;
    font-size: 1rem;
    flex-direction: column;
    height: auto;
    transform: ${(props) => (props.state ? "scaleY(1)" : "scaleY(0)")};
    transition: 1s linear transform;

    overflow: hidden;

    a {
      text-decoration: none;
      padding: 1rem 0.5rem;
      border-bottom: 1px solid lightgray;
      overflow: hidden;
    }

    /* a.active {
      background-color: #ff5d3e;
    } */
  }
`;

export default StyledDropDown;
