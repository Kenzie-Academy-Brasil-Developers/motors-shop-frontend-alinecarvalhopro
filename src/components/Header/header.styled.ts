import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;

  border-bottom: 2px solid var(--color-greyScale-6);

  background-color: white;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  .navBar {
    width: calc(100% - 3rem);

    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      width: 100px;
    }

    .menuHamburguer {
      width: 16px;
    }

    .webMenu {
      width: 0;

      margin-bottom: 300px;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .mobileMenu {
    max-width: 100%;

    padding: 16px;

    border-bottom: 2px solid var(--color-greyScale-6);

    background-color: white;

    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .mobileMenu.show {
    display: block;
  }

  @media (min-width: 769px) {
    .menuHamburguer {
      margin-bottom: 300px;
    }

    .mobileMenu {
      margin-top: -300px;
    }
    .webMenu {
      min-width: 313px;

      margin-right: 1.5rem;

      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;
