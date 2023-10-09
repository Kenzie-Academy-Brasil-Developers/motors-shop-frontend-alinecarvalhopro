import { ButtonContainer } from "./button.style";

interface IButtonProps {
  title: string;
  width?: string;
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
  width,
  margin,
  borderColor,
  backgroundColor,
  backgroundColorHover,
  textColor,
  loading,
  onClickHandler,
  ...props
}: IButtonProps) => {
  return (
    <ButtonContainer
      {...props}
      title={title}
      width={width}
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
