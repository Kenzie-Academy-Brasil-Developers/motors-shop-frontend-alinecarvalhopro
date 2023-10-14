import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { StyledFieldset } from "./fieldset.styled";
import { StyledLabel } from "./label.styled";
import { StyledInput } from "./input.styled";
import { TextError } from "../Text/text.styled";

interface InputContainerProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  hasError?: boolean;
  width?: string;
  marginfieldset?: string;
}

const InputContainer = forwardRef(
  (
    {
      hasError,
      width,
      marginfieldset,
      type,
      id,
      label,
      errorMessage,
      ...rest
    }: InputContainerProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <StyledFieldset marginfieldset={marginfieldset}>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput
          hasError={hasError}
          width={width}
          type={type}
          ref={ref}
          {...rest}
        />
        {errorMessage ? <TextError>{errorMessage}</TextError> : null}
      </StyledFieldset>
    );
  }
);

export default InputContainer;
