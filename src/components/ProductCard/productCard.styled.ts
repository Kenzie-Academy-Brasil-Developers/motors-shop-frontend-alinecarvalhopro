import styled from "styled-components";

export const StyledCardProduct = styled.li`
  width: 312px;
  height: 350px;

  display: flex;
  flex-direction: column;

  .imageBoxProductCard {
    width: 100%;

    background-color: var(--color-greyScale-7);

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-height: 152px;
    }
  }

  .productInfosBoxProductCard {
    height: 198px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .tagsPriceBoxProductCard {
      margin-top: 16px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .tagsBox {
        width: 110px;

        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`;
