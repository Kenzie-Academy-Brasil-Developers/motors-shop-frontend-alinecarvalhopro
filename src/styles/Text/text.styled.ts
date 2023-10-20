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
  margin: ${(props) => (props.margin ? props.margin : "0")};

  font-family: "Inter", sans-serif;
  color: ${(props) =>
    props.color ? props.color : "color: var(--color-greyScale-2)"};
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
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
`;

const HeadingH2 = styled.h2<HeadingProps>`
  margin: ${(props) => (props.margin ? props.margin : "0")};

  font-family: "Lexend", sans-serif;
  color: ${(props) => (props.color ? props.color : "var(--color-greyScale-1)")};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

const HeadingH3 = styled.h3<HeadingProps>`
  margin: ${(props) => (props.margin ? props.margin : "0")};

  font-family: "Lexend", sans-serif;
  color: ${(props) => (props.color ? props.color : "var(--color-greyScale-1)")};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;
export { TextError, TextBody1, TextBody2, HeadingH2, HeadingH3 };
