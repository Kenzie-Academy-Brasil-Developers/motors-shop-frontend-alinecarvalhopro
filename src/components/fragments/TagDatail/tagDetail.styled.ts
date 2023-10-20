import styled from "styled-components";

interface TagDetailProps {
  margin?: string;
}

export const StyledTagDetail = styled.div<TagDetailProps>`
  height: 32px;

  margin: ${(props) => props.margin};

  border-radius: 4px;

  padding: 0 8px;

  background-color: var(--color-brand-4);

  display: flex;
  align-items: center;
  justify-content: center;
`;
