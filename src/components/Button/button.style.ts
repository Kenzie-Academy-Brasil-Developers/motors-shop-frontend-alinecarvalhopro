import styled from "styled-components";

interface ButtonContainerProps {
  width?: string;
  margin?: string;
  borderColor?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  textColor?: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${(props) => (props.width ? `width: ${props.width};` : `width: 100%;`)};
  height: 38px;

  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}

  border-radius: 4px;
  ${(props) =>
    props.borderColor
      ? `border: 1.5px solid ${props.borderColor};`
      : "border: 1.5px solid var(--color-brand-1);"}

  padding: 12px, 20px;

  ${(props) =>
    props.backgroundColor
      ? `background-color: ${props.backgroundColor};`
      : "background-color: var(--color-brand-1);"}

  transition: 0.8s;

  &:hover {
    ${(props) =>
      props.backgroundColorHover
        ? `background-color: ${props.backgroundColorHover};`
        : "background-color: var(--color-brand-2);"}
  }

  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  ${(props) =>
    props.textColor
      ? `color: ${props.textColor};`
      : "color: var(--color-whiteFixed);"}

  @media (min-width: 769px) {
    height: 48px;

    padding: 12px, 28px;

    font-size: 16px;
  }
`;
