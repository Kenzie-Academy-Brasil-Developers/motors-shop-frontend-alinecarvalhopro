import styled from "styled-components";

interface TextProps {
  isError?: boolean;
  margin?: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
}

interface HeadingProps {
  margin?: string;
  fontWeight?: string;
  fontSize?: string;
}

const BaseText = styled.p<TextProps>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}

  font-family: 'Inter', sans-serif;
  ${(props) =>
    props.color ? `color: ${props.color};` : "color: var(--color-greyScale-2);"}
`;

const TextError = styled(BaseText)<TextProps>`
  margin-top: 8px;

  font-size: 8px;
  color: var(--color-feedback-alert-1);
`;

const TextBody1 = styled(BaseText)<TextProps>`
  font-weight: 600;
  font-size: 16px;
`;

const TextBody2 = styled(BaseText)<TextProps>`
  font-weight: 400;
  font-size: 14px;
`;

const HeadingH3 = styled.h3<HeadingProps>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}

  font-family: 'Lexend', sans-serif;
  color: var(--color-greyScale-1);
  ${(props) => props.fontSize}
  ${(props) => props.fontWeight}
`;
export { TextError, TextBody1, TextBody2, HeadingH3 };
