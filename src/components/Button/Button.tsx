import { ButtonContainer } from "./button.style";

interface IButtonProps {
  title: string;
  width?: string;
  heigth?: string;
  margin?: string;
  bordercolor?: string;
  backgroundcolor?: string;
  backgroundcolorhover?: string;
  textcolor?: string;
  textColorHover?: string;
  loading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClickHandler?: () => void;
}

const Button = ({
  title,
  width,
  heigth,
  margin,
  bordercolor,
  backgroundcolor,
  backgroundcolorhover,
  textcolor,
  textColorHover,
  loading,
  type,
  onClickHandler,
  ...props
}: IButtonProps) => {
  return (
    <ButtonContainer
      {...props}
      title={title}
      width={width}
      height={heigth}
      margin={margin}
      bordercolor={bordercolor}
      backgroundcolor={backgroundcolor}
      backgroundcolorhover={backgroundcolorhover}
      textcolor={textcolor}
      textColorHover={textColorHover}
      type={type}
      onClick={onClickHandler}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;
