import styled from "styled-components";

interface TextProps {
  isError?: boolean;
  margin?: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
}

const BaseText = styled.text<TextProps>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}

  font-family: 'Inter', sans-serif;
`;

const TextError = styled(BaseText)<TextProps>`
  margin-top: 8px;

  font-size: 8px;
  color: var(--color-feedback-alert-1);
`;

const TextBody2 = styled(BaseText)<TextProps>`
  font-weight: 400;
  font-size: 14px;
  ${(props) =>
    props.color ? `color: ${props.color};` : "color: var(--color-greyScale-2);"}
`;
export { TextError, TextBody2 };
