import { ButtonContainer } from "./button.style";

interface ButtonProps {
  title: string;
  margin?: string;
  borderColor?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  textColor?: string;
  loading?: boolean;
  onClickHandler?: () => void;
}

const Button = ({
  title,
  margin,
  borderColor,
  backgroundColor,
  backgroundColorHover,
  textColor,
  loading,
  onClickHandler,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer
      {...props}
      title={title}
      margin={margin}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      textColor={textColor}
      onClick={onClickHandler}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;
