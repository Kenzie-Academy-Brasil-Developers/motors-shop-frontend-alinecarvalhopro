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

  main {
    padding: 2rem 0;

    background-color: var(--color-greyScale-8);
  }

  ul {
    width: calc(100% - 16px);
    display: flex;
    overflow-x: auto;
    margin: 16px 0 16px 16px;
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
    
    main {
      display: flex;
      justify-content: center;
    }

    ul {
      width: calc(100% - 200px);
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      margin: 0;
    }
  }
`;
