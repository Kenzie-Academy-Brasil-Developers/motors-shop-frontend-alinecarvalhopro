import { SubmitHandler, useForm } from "react-hook-form";
import InputContainer from "../../InputContainer/InputContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../Button/Button";
import { useUserContext } from "../../../providers/UserContext";
import {
  TUpdateUserPartial,
  updateUserSchema,
} from "../../../schemas/user/user.register";
import { StyledEditUserFormContainer } from "./editUserForm.style";

const EditUserForm = () => {
  const { updateUser, user, deleteUser, loadingDeleteUser, setModalUpdateUserIsOpen } = useUserContext();

  const id = localStorage.getItem("@MOTORSSHOP:USERID");

  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm<TUpdateUserPartial>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      address: user?.address,
    },
  });

  const submit: SubmitHandler<TUpdateUserPartial> = (formData) => {
    if (formData.email === user!.email) {
      delete formData.email;
    }
    if (formData.cpf === user!.cpf) {
      delete formData.cpf;
    }
    updateUser(id!, formData);
  };

  return (
    <StyledEditUserFormContainer>
      <form onSubmit={handleSubmit(submit)}>
        <InputContainer
          marginfieldset="0 0 16px 0"
          label="Nome"
          id="name"
          type="text"
          defaultValue={user?.name}
          {...register("name")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          label="Email"
          id="email"
          type="email"
          defaultValue={user?.email}
          {...register("email")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          label="CPF"
          id="cpf"
          type="text"
          defaultValue={user?.cpf}
          {...register("cpf")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          label="Celular"
          id="phone_number"
          type="text"
          defaultValue={user?.phone_number}
          {...register("phone_number")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          label="Data de nascimento"
          id="birth"
          type="date"
          defaultValue={user?.birth.toString()}
          {...register("birth")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          height="80px"
          label="Descrição"
          id="description"
          type="text"
          defaultValue={user?.description}
          {...register("description")}
        />

        <Button
          type="submit"
          margin="16px 0 0 0"
          title={isSubmitted ? "Salvando" : "Salvar alterações"}
        />
      </form>
      <div className="boxButtons">
        <Button
          margin="0 8px 0 0"
          type="button"
          title="Cancelar"
          backgroundcolor="var(--color-greyScale-6)"
          textcolor="var(--color-greyScale-2)"
          backgroundcolorhover="var(--color-greyScale-1)"
          bordercolor="transparent"
          onClickHandler={() => setModalUpdateUserIsOpen(false)}
        />
        <Button
          margin="0 0 0 8px"
          type="button"
          title={loadingDeleteUser ? "Aguarde" : "Excluir perfil"}
          backgroundcolor="var(--color-feedback-alert-3)"
          textcolor="var(--color-feedback-alert-1)"
          backgroundcolorhover="var(--color-feedback-alert-1)"
          bordercolor="transparent"
          onClickHandler={() => deleteUser()}
        />
      </div>
    </StyledEditUserFormContainer>
  );
};

export default EditUserForm;
