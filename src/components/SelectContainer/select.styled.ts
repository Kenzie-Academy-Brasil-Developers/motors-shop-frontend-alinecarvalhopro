import styled from "styled-components";

interface SelectProps {
  hasError?: boolean;
  width?: string;
  margin?: string;
}

export const StyledSelect = styled.select<SelectProps>`
  ${(props) =>
    props.width ? `width: ${props.width};` : `width: 100%;`}
  height: 48px;

  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}

  padding: 0 16px;

  border-radius: 4px;
  border: 1.5px solid
    ${(props) =>
      props.hasError
        ? "var(--color-feedback-alert-1)"
        : "var(--color-greyScale-7)"};

  transition: 0.8s;

  &:focus {
    border: 1.5px solid var(--color-brand-2);
  }

  &:hover {
    background-color: var(--color-greyScale-8);
  }

  font-family: "Inter", sans-serif;
  color: var(--color-greyScale-3);
`;
