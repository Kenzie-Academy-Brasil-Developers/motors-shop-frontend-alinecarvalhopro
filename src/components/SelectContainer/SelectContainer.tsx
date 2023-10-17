import { ForwardedRef, SelectHTMLAttributes, forwardRef } from "react";
import { TextError } from "../../styles/Text/text.styled";
import { StyledFieldset } from "../InputContainer/fieldset.styled";
import { StyledLabel } from "../InputContainer/label.styled";
import { StyledSelect } from "./select.styled";

interface SelectContainerProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  errorMessage?: string;
  hasError?: boolean;
  width?: string;
  margin?: string;
}

const SelectContainer = forwardRef(
  (
    {
      children,
      hasError,
      width,
      margin,
      id,
      label,
      errorMessage,
      ...rest
    }: SelectContainerProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <StyledFieldset>
        <StyledLabel>{label}</StyledLabel>
        <StyledSelect
          hasError={hasError}
          width={width}
          margin={margin}
          ref={ref}
          {...rest}
        >
          {children}
        </StyledSelect>
        {errorMessage ? <TextError>{errorMessage}</TextError> : null}
      </StyledFieldset>
    );
  }
);

export default SelectContainer;
