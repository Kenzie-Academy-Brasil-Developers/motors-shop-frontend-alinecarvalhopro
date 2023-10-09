import styled from "styled-components";

interface ButtonContainerProps {
  margin?: string;
  borderColor?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  textColor?: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) =>
    props.borderColor
      ? `border: 1.5px solid ${props.borderColor};`
      : "border: 1.5px solid var(--color-brand-1);"}
  ${(props) =>
    props.backgroundColor
      ? `background-color: ${props.backgroundColor};`
      : "background-color: var(--color-brand-1);"}
  ${(props) =>
    props.textColor
      ? `color: ${props.textColor};`
      : "color: var(--color-whiteFixed);"}
  
  width: 119px;
  height: 38px;

  border-radius: 4px;

  padding: 12px, 20px;

  background-color :hover {
    ${(props) =>
      props.backgroundColorHover
        ? `background-color: ${props.backgroundColorHover};`
        : "background-color: var(--color-brand-1)"}
  }

  font-weight: 600;
  font-size: 14px;

  @media (min-width: 769px) {
    width: 146px;
    height: 48px;

    padding: 12px, 28px;

    font-size: 16px;
  }
`;
