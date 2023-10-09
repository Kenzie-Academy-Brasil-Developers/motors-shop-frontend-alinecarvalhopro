import styled from "styled-components";

interface TextProps {
  isError?: boolean;
  margin?: string;
  fontWeight?: string;
  fontSize?: string;
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


export { TextError };
