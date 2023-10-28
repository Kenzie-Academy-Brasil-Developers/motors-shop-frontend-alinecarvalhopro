import styled from "styled-components";

export const StyledCommentCard = styled.li`
  margin-bottom: 44px;

  background-color: var(--color-whiteFixed);

  list-style: none;

  display: flex;
  flex-direction: column;

  position: relative;

  .binButton {
    width: 20px;

    position: absolute;
    top:0;
    right: 0;
  }

  .boxUserDate {
    display: flex;
    align-items: center;
  }
`;
