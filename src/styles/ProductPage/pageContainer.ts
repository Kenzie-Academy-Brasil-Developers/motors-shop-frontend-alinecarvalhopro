import styled from "styled-components";

export const StyledPageContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  position: relative;

  .containerProductInfos {
    min-width: 100%;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    .positioningBackground {
      width: 100%;
      height: 516px;
      background-color: var(--color-brand-1);
      display: flex;
      justify-content: center;
    }

    .imageBox {
      width: calc(100% - 32px);
      height: 355px;

      position: absolute;
      /* background-color: var(--color-whiteFixed); */
      border-radius: 4px;
      margin-top: 125px;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;

        border-radius: 4px;

        object-fit: cover;
      }
    }

    .productDetails {
      width: calc(100% - 64px);

      margin-top: -16px;

      border-radius: 4px;

      padding: 16px;

      background-color: var(--color-whiteFixed);

      display: flex;
      flex-direction: column;

      .tagsBox {
        margin-top: 16px;

        display: flex;
        align-items: center;
      }
    }

    .productDescription {
      width: calc(100% - 64px);

      margin-top: 16px;

      border-radius: 4px;

      padding: 16px;

      background-color: var(--color-whiteFixed);
    }

    .sellerInfos {
      width: calc(100% - 64px);

      margin-top: 16px;

      border-radius: 4px;

      padding: 32px 16px;

      background-color: var(--color-whiteFixed);

      display: flex;
      flex-direction: column;
      align-items: center;

      .userCharacters {
        width: 104px;
        height: 104px;

        border-radius: 100px;

        background-color: var(--color-brand-1);

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .boxComments {
      width: calc(100% - 64px);

      margin: 16px 0;

      border-radius: 4px;

      padding: 32px 16px;

      background-color: var(--color-whiteFixed);

      display: flex;
      flex-direction: column;
    }

    footer {
      position: static;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  @media (min-width: 769px) {
  }
`;
