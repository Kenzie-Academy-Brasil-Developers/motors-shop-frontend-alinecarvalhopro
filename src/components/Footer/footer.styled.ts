import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 310.34px;

  background-color: #000000;

  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 769px) {
    height: 140px;

    flex-direction: row;
  }
`;
