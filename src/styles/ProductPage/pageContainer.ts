import styled from "styled-components";

export const StyledPageContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;

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

  .containerProductInfos {
    max-width: 100%;

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

      border-radius: 4px;
      margin-top: 125px;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        min-width: 100%;
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

    .boxComments,
    .boxToComment {
      width: calc(100% - 64px);

      margin-top: 16px;

      border-radius: 4px;

      padding: 32px 16px;

      background-color: var(--color-whiteFixed);

      display: flex;
      flex-direction: column;
    }

    .boxToComment {
      margin-bottom: 16px;
    }

    footer {
      position: static;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  @media (min-width: 1024px) {
    .userOptions {
      flex-direction: row;
    }

    .containerProductInfos {
      align-items: flex-start;
    }
    .imageBox {
      max-width: calc(45% + 32px);

      position: fixed;
      left: 100px;
    }

    .productDetails,
    .productDescription,
    .boxComments,
    .boxToComment {
      max-width: 45%;

      margin-left: 100px;
    }

    .sellerInfos {
      max-width: 20%;

      margin: 0;

      position: fixed;

      top: 108px;
      right: 100px;
    }
  }

  @media (min-width: 1400px) {
    .imageBox {
      max-width: calc(50% + 32px);
    }
    .productDetails,
    .productDescription,
    .boxComments,
    .boxToComment {
      max-width: 50%;
    }
    .sellerInfos {
      max-width: 25%;
    }
  }
`;
