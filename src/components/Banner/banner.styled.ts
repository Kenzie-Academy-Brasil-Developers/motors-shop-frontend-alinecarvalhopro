import styled from "styled-components";
import backgroundImage from "../../assets/banner.jpg";

export const StyledImage = styled.div`
  width: 100%;
  height: 627px;

  margin-top: 80px;

  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 769px) {
    height: 544px;
  }
`;
