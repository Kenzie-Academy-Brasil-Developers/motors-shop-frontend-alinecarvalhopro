import styled from "styled-components";

interface LabelProps {
  color?: string;
}

export const StyledLabel = styled.label<LabelProps>`
  margin-bottom: 16px;

  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: var(--color-greyScale-2);
`;