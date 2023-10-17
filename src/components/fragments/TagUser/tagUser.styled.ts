import styled from "styled-components";

interface UserTagProps {
  margin?: string;
}

export const StyledTagUser = styled.div<UserTagProps>`
  max-width: 200px;



  display: flex;
  align-items: center;
  justify-content: start;

  div {
    width: 32px;
    height: 32px;

    margin-right: 8px;

    border-radius: 100%;

    background-color: blue;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
