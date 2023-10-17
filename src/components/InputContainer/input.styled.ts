import styled from "styled-components";

interface InputProps {
  hasError?: boolean;
  width?: string;
}

export const StyledInput = styled.input<InputProps>`
  ${(props) =>
    (props.width) ? `width: ${props.width};` : `width: calc(100% - 32px);`}
  height: 48px;

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
