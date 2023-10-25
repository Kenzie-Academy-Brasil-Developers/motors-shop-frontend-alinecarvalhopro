import { StyledEditAddressFormContainer } from "./editAdressForm.style";
import { SubmitHandler, useForm } from "react-hook-form";
import InputContainer from "../../InputContainer/InputContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../Button/Button";
import { useUserContext } from "../../../providers/UserContext";
import {
  TUpdateUserPartial,
  updateUserSchema,
} from "../../../schemas/user/user.register";

const EditAddressForm = () => {
  const { updateUser, user, setModalUpdateAddressIsOpen } = useUserContext();

  const id = localStorage.getItem("@MOTORSSHOP:USERID");

  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm<TUpdateUserPartial>({
    resolver: zodResolver(updateUserSchema),
  });

  const submit: SubmitHandler<TUpdateUserPartial> = (formData) => {
    updateUser(id!, formData);
  };

  return (
    <StyledEditAddressFormContainer>
      <form onSubmit={handleSubmit(submit)}>
        <InputContainer
          marginfieldset="0 0 16px 0"
          label="Cep"
          id="cep"
          type="text"
          defaultValue={user?.address.cep}
          {...register("address.cep")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          label="Estado"
          id="state"
          type="text"
          defaultValue={user?.address.state}
          {...register("address.state")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          label="Cidade"
          id="city"
          type="text"
          defaultValue={user?.address.city}
          {...register("address.city")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          label="Rua"
          id="street"
          type="text"
          defaultValue={user?.address.street}
          {...register("address.street")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          label="Número"
          id="number"
          type="text"
          defaultValue={user?.address.number}
          {...register("address.number")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          label="Complemento"
          id="complement"
          type="text"
          defaultValue={user?.address.complement}
          {...register("address.complement")}
        />
        <div className="boxButtons">
          <Button
            margin="0 8px 0 0"
            type="button"
            title="Cancelar"
            backgroundcolor="var(--color-greyScale-6)"
            textcolor="var(--color-greyScale-2)"
            backgroundcolorhover="var(--color-greyScale-1)"
            bordercolor="transparent"
            onClickHandler={() => setModalUpdateAddressIsOpen(false)}
          />
          <Button
            type="submit"
            margin="0 0 0 8px"
            title={isSubmitted ? "Salvando" : "Salvar alterações"}
          />
        </div>
      </form>
    </StyledEditAddressFormContainer>
  );
};

export default EditAddressForm;
