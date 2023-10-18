import styled from "styled-components";

export const StyledPageContainer = styled.div`
  max-width: 100vw;
  height: 100vh;

  background-color: var(--color-whiteFixed);

  position: relative;

  main {
    padding: 16px 0;

    background-color: var(--color-whiteFixed);
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
    main {
      display: flex;
      justify-content: center;
    }

    ul {
      width: calc(100% - 200px);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0;
    }
  }
`;
