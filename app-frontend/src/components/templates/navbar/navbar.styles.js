import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  img {
    height: 35px;
    width: 100px;
  }
`;

const StyledHomeNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  width: 100%;
  padding: 0.25rem auto;

  .nav-bar-row-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 7.5%;
    background-color: ${(props) => props.theme.color.random.rand1};

    .social-media-icons {
      display: flex;
      gap: 10px;
    }
  }

  .search_login {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    justify-content: space-between;
    position: relative;

    @media screen and (max-width: 480px) {
      width: 90%;
    }
  }
`;

export { StyledNav, StyledHomeNav };
