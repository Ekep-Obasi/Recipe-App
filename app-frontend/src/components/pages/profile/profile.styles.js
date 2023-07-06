import styled from "styled-components";

const StyledProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  header {
    width: 100%;
    display: flex;
    font-family: ${(props) => props.theme.fontFamily[1]};
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    padding: 15px 0;
    border-bottom: 1px solid ${(props) => props.theme.color.random.lightgrey};
  }

  main {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .avatar {
      display: flex;
      align-items: center;
      gap: 15px;
      justify-content: flex-start;

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }

    form {
      display: flex;
      width: 100%;
      font-family: ${(props) => props.theme.fontFamily[0]};
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 25px 0;
      @media screen and (max-width: 350px) {
        gap: 30px 0;
      }

      .inputFeild {
        width: 48%;
        position: relative;
        height: fit-content;
        text-align: left;
        @media screen and (max-width: 350px) {
          width: 100%;
        }

        a {
          color: #ff5d3e;
          text-decoration: none;
        }
      }
    }

    .social-media {
      text-align: left;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 0.85rem;
      font-family: ${(props) => props.theme.fontFamily[0]};

      .accounts {
        .info {
          display: flex;
          justify-content: space-between;

          .social-icon {
            display: flex;
            flex-direction: column;

            span {
              font-size: 0.75rem;
              font-weight: bold;
              font-family: ${(props) => props.theme.fontFamily[0]};
            }
            img {
              height: 65px;
              width: 90px;
            }
          }
        }
      }
    }

    .subscriptions {
      text-align: left;
      border-bottom: 1px solid ${(props) => props.theme.color.random.lightgrey};
      width: 100%;
      padding: 15px;

      .container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .logout-delete {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 1rem;
      font-family: ${(props) => props.theme.fontFamily[0]};

      a {
        display: flex;
        align-items: center;
        gap: 5px;
        text-decoration: none;
        color: #000;
      }

      .delete {
        color: red;
      }
    }
  }
`;

export default StyledProfileWrapper;
