import styled from "styled-components";

interface ButtonContainerProps {
  width?: string;
  margin?: string;
  bordercolor?: string;
  backgroundcolor?: string;
  backgroundcolorhover?: string;
  textcolor?: string;
  textColorHover?: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${(props) => (props.width ? `width: ${props.width};` : `width: 100%;`)};
  height: 38px;

  margin: ${(props) => props.margin};

  border-radius: 4px;
  border: ${(props) =>
    props.bordercolor
      ? `1.5px solid ${props.bordercolor}`
      : "1.5px solid var(--color-brand-1)"};

  padding: 12px, 20px;

  background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : "var(--color-brand-1)"};

  transition: 0.8s;

  &&:hover {
    background-color: ${(props) =>
      props.backgroundcolorhover
        ? props.backgroundcolorhover
        : "var(--color-brand-2)"};
    color: ${(props) =>
      props.textColorHover ? props.textColorHover : "var(--color-whiteFixed)"};
  }

  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) =>
    props.textcolor ? props.textcolor : "var(--color-whiteFixed)"};

  @media (min-width: 769px) {
    height: 48px;

    padding: 12px, 28px;

    font-size: 16px;
  }
`;
