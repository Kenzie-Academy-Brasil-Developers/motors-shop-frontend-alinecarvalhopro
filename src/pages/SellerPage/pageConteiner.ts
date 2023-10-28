import styled from "styled-components";

export const StyledPageContainer = styled.div`
  max-width: 100vw;
  height: 100vh;

  background-color: var(--color-greyScale-8);

  position: relative;

  .userOptions {
    min-width: 100vw;
    background-color: var(--color-whiteFixed);

    position: absolute;
    top: 80px;
    left: 0;

    display: flex;
    flex-direction: column;

    border-top: 2px solid var(--color-greyScale-6);
  }

  .sellerInformationContainer {
    position: relative;
  }

  .sellerInformationBackground {
    width: 100%;
    height: 331px;

    background-color: var(--color-brand-1);

    display: flex;
    justify-content: center;

    .boxSellerInformation {
      width: calc(100% - 96px);
      height: calc(397px - 96px);

      margin-top: 165px;

      border-radius: 4px;

      padding: 32px;

      position: absolute;

      background-color: var(--color-whiteFixed);

      .userCharacters {
        width: 104px;
        height: 104px;

        border-radius: 100px;

        background-color: var(--color-brand-1);

        display: flex;
        align-items: center;
        justify-content: center;
      }

      .boxSellerNameAndTag {
        width: calc(100% - 96px);
        margin-top: 16px;

        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
  }

  main {
    width: calc(100% - 16px);
    margin-top: 200px;

    padding: 2rem 0;

    background-color: var(--color-greyScale-8);

    display: flex;
    flex-direction: column;
    align-items: center;

    .announcementsTitle {
      width: calc(100% - 16px);

      margin: 0 0 16px 32px;
    }
  }

  ul {
    width: calc(100% - 16px);

    margin: 16px 0 16px 16px;

    display: flex;

    overflow-x: auto;
  }

  footer {
    position: static;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media (min-width: 769px) {
    .userOptions {
      flex-direction: row;
    }

    .boxSellerInformation {
      max-width: calc(100% - 264px);
    }

    main {
      width: 100%;

      display: flex;

      justify-content: center;

      .announcementsTitle {
        width: calc(100% - 200px);

        margin: 0 0 16px 16px;
      }
    }

    ul {
      width: calc(100% - 200px);

      margin: 0;

      display: flex;
      flex-wrap: wrap;
      justify-content: start;
    }
  }
`;
