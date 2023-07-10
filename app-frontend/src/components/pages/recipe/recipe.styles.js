import styled from "styled-components";

const StyledRecipe = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  @media screen and (max-width: 480px) {
    padding: 2%;
  }

  header {
    width: 100%;
    .share {
      display: flex;
      justify-content: space-between;
      font-family: ${(props) => props.theme.fontFamily[0]};
      font-size: 1rem;
    }

    h1 {
      font-family: ${(props) => props.theme.fontFamily[1]};
      font-size: 3.5rem;
      text-align: left;
      @media screen and (max-width: 480px) {
        font-size: 2rem;
      }
    }

    .info {
      display: flex;
      gap: 10px;
      align-items: center;
      border-bottom: 1px solid ${(props) => props.theme.color.random.lightgrey};
      padding-bottom: 1rem;

      @media screen and (max-width: 480px) {
        gap: 5px;
      }

      .profile,
      .time,
      .comments {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 0;
        gap: 10px;

        @media screen and (max-width: 480px) {
          gap: 5px;
        }

        img {
          height: 35px;
          width: 35px;
          border-radius: 50%;
        }
        span {
          font-family: ${(props) => props.theme.fontFamily[0]};
          font-size: 1rem;
        }
      }
    }

    .rating {
      display: flex;
      gap: 2px;
      color: gold;
      align-items: center;
    }

    .description {
      font-family: ${(props) => props.theme.fontFamily[0]};
      font-size: 1rem;
      width: 60%;
      text-align: left;
      padding: 1rem 0;

      @media screen and (max-width: 480px) {
        width: 100%;
      }
    }
  }

  .image {
    width: 100%;
    height: 450px;
    background-image: url("https://img.jamieoliver.com/jamieoliver/recipe-database/8dhIZVN1qOS9cBVMAjX98l.jpg?tr=w-500");
    background-size: cover;
    background-position: center;
    padding: 1rem;
  }

  main {
    display: flex;

    @media screen and (max-width: 480px) {
      flex-direction: column;
    }

    .left-container {
      flex: 1;
      .recipe-info {
        display: flex;
        align-items: center;
        font-size: 1rem;
        gap: 25px;
        font-family: ${(props) => props.theme.fontFamily[0]};
        margin: 1rem 0;

        @media screen and (max-width: 480px) {
          gap: 0px;
          justify-content: space-between;
        }
      }

      .container {
        display: flex;
        flex-direction: column;
        border-right: 1px solid ${(props) => props.theme.color.random.darkgrey};
        padding: 0.5rem 1rem;

        .title {
          color: ${(props) => props.theme.color.random.darkgrey};
        }

        .desc {
          font-weight: 500;
        }
      }

      h1 {
        font-family: ${(props) => props.theme.fontFamily[1]};
      }

      .ingredients {
        font-size: 1rem;
        font-family: ${(props) => props.theme.fontFamily[0]};
        text-align: left;
        padding: 1rem 0;

        .wrapper {
          padding: 1rem 0;

          .checkbox {
            display: flex;
            padding: 5px 0;
            gap: 5px;
            padding: 0.5rem;
          }
        }
      }

      .instructions {
        text-align: left;
        width: 60%;

        @media screen and (max-width: 480px) {
          width: 100%;
        }

        .instruction-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1rem;
          font-family: ${(props) => props.theme.fontFamily[0]};
          text-justify: auto;

          .number {
            height: 15px;
            width: 15px;
            padding: 1rem;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            color: #fff;
            background-color: orange;
          }

          .desc {
            line-break: auto;
            padding: 0.65rem 0;
            line-height: 1.5em;
          }
        }
      }
    }

    .right-container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin: 1rem 0;
      gap: 5px;
      width: 30%;
      padding-left: 2rem;
      border-left: 1px solid ${(props) => props.theme.color.random.lightgrey};

      @media screen and (max-width: 480px) {
        width: 100%;
        padding: 0;
        border: none;
      }

      .nutritional-fact {
        width: 100%;
        height: fit-content;
        @media screen and (max-width: 480px) {
          width: 100%;
        }

        h2 {
          font-family: ${(props) => props.theme.fontFamily[1]};
        }

        .facts-table {
          .item {
            display: flex;
            justify-content: space-between;
            font-family: ${(props) => props.theme.fontFamily[0]};
            padding: 0.65rem 0;
            border-bottom: 1px solid
              ${(props) => props.theme.color.random.darkgrey};

            &:last-child {
              border: none;
            }
          }
        }

        padding: 1rem;
        background-color: ${(props) => props.theme.color.random.lightgrey};
        border-radius: 8px;
      }

      .recommendations {
        display: flex;
        flex-direction: column;

        h3 {
          font-family: ${(props) => props.theme.fontFamily[1]};
        }

        .recipe-card {
          display: flex;
          gap: 5px;
          padding: 1rem;

          .img {
            height: 95px;
            width: 95px;
            background-image: url("https://img.jamieoliver.com/jamieoliver/recipe-database/8dhIZVN1qOS9cBVMAjX98l.jpg?tr=w-500");
            background-size: cover;
            background-position: center;
            padding: 1rem;
          }

          .desc {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 1.2rem;
            font-weight: 600;
            font-family: ${(props) => props.theme.fontFamily[0]};
            text-align: left;

            .rating {
              display: flex;
              gap: 2px;
              color: gold;
              align-items: center;
            }
          }
        }
      }
    }
  }
`;

export { StyledRecipe };
