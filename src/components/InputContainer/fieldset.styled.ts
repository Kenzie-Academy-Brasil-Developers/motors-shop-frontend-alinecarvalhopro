import styled from "styled-components";

interface FieldsetProps {
  marginfieldset?: string;
}

export const StyledFieldset = styled.fieldset<FieldsetProps>`
  margin: ${(props) => props.marginfieldset};

  border: none;

  background-color: var(--color-whiteFixed);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
