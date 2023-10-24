import styled from "styled-components";

export const StyledCardProduct = styled.li`
  min-width: 312px;
  min-height: 350px;

  margin-right: 20px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;

  background-color: var(--color-greyScale-8);

  .model {
    height: 40px;
  }

  .description {
    height: 58px;
  }

  .imageBoxProductCard {
    width: 100%;
    height: 152px;

    background-color: var(--color-greyScale-7);

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;

      transition: 0.8s;

    }
    
    img:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }

  .productInfosBoxProductCard {
    height: 198px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .tagsPriceBoxProductCard {
      min-width: 100%;
      height: 50px;

      margin-top: 16px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .tagsBox {
        min-width: 150px;

        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .price {
        width: 160px;

        margin-left: 10px;
      }
    }

    @media (min-width: 769px) {
      max-width: 312px;
    }
  }
`;
