import { SubmitHandler, useForm } from "react-hook-form";
import InputContainer from "../../InputContainer/InputContainer";
import { useUserContext } from "../../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../../schemas/user/user.register";
import Button from "../../Button/Button";
import { HeadingH2, TextBody2 } from "../../../styles/Text/text.styled";
import { StyledRegisterLoginFormContainer } from "../../../styles/SheredRegisterLogin/registerForm.styled";
import { useState } from "react";

export interface IRegisterFormData {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  birth: Date;
  description: string;
  seller: boolean;
  password: string;
  confirmPassword: string;
  address: IAddressRegister;
}

interface IAddressRegister {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

const RegisterForm = () => {
  const { submitRegister } = useUserContext();

  const [isSeller, setIsSeller] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<IRegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const submit: SubmitHandler<IRegisterFormData> = (formData) => {
    const data = {
      ...formData,
      seller: isSeller,
    };
    submitRegister(data);
  };

  return (
    <StyledRegisterLoginFormContainer>
      <HeadingH2 margin="12px">Cadastro</HeadingH2>
      <TextBody2 margin="12px" fontWeight="500" color="var(--color-blackFixed)">
        Informações pessoais
      </TextBody2>
      <form style={{ margin: 12 }} onSubmit={handleSubmit(submit)}>
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.name?.message}
          label="Nome"
          id="name"
          type="text"
          placeholder="Ex: Aline Carvalho"
          {...register("name")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.email?.message}
          label="Email"
          id="email"
          type="email"
          placeholder="Ex: aline@mail.com"
          {...register("email")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.cpf?.message}
          label="CPF"
          id="cpf"
          type="string"
          placeholder="000.000.000-00"
          {...register("cpf")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.phone_number?.message}
          label="Celular"
          id="phone_number"
          type="text"
          placeholder="(DDD) 90000-0000"
          {...register("phone_number")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.birth?.message}
          label="Data de nascimento"
          id="birth"
          type="date"
          placeholder="00/00/0000"
          {...register("birth")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          height="80px"
          errorMessage={errors.description?.message}
          label="Descrição"
          id="description"
          type="text"
          placeholder="Digite descrição"
          {...register("description")}
        />
        <TextBody2
          margin="16px 0 16px 0"
          fontWeight="500"
          color="var(--color-blackFixed)"
        >
          Informações do endereço
        </TextBody2>
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.address?.cep?.message}
          label="CEP"
          id="cep"
          type="text"
          placeholder="00000-000"
          {...register("address.cep")}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InputContainer
            marginfieldset="0 10px 16px 0"
            errorMessage={errors.address?.state?.message}
            label="Estado"
            id="state"
            type="text"
            placeholder="Digitar Estado"
            {...register("address.state")}
          />
          <InputContainer
            marginfieldset="0 0 16px 10px"
            errorMessage={errors.address?.city?.message}
            label="Cidade"
            id="city"
            type="text"
            placeholder="Digitar Cidade"
            {...register("address.city")}
          />
        </div>
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.address?.street?.message}
          label="Rua"
          id="street"
          type="text"
          placeholder="Digitar rua"
          {...register("address.street")}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InputContainer
            marginfieldset="0 10px 16px 0"
            errorMessage={errors.address?.street?.message}
            label="Número"
            id="number"
            type="text"
            placeholder="Ex: 00"
            {...register("address.number")}
          />
          <InputContainer
            marginfieldset="0 0 16px 10px"
            errorMessage={errors.address?.complement?.message}
            label="Complemento"
            id="complement"
            type="text"
            placeholder="Ex: Apto 111"
            {...register("address.complement")}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClickHandler={() => setIsSeller(false)}
            margin="0 10px 16px 0"
            backgroundcolor={
              isSeller ? "var(--color-whiteFixed)" : "var(--color-brand-2)"
            }
            bordercolor="var(--color-greyScale-7)"
            textcolor={
              isSeller ? "var(--color-greyScale-0)" : "var(--color-whiteFixed)"
            }
            title="Comprador"
            type="button"
          />
          <Button
            onClickHandler={() => setIsSeller(true)}
            margin="0 0 16px 10px"
            backgroundcolor={
              isSeller ? "var(--color-brand-2)" : "var(--color-whiteFixed)"
            }
            bordercolor={
              isSeller ? "var(--color-whiteFixed)" : "var(--color-greyScale-0)"
            }
            textcolor={
              isSeller ? "var(--color-whiteFixed)" : "var(--color-greyScale-0)"
            }
            title="Anunciante"
            type="button"
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        ></div>
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.password?.message}
          label="Senha"
          id="password"
          type="password"
          placeholder="Escolha sua senha"
          {...register("password")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.confirmPassword?.message}
          label="Confirmar senha"
          id="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        <Button
          backgroundcolorhover="var(--color-brand-2)"
          type="submit"
          title={isSubmitted ? "Cadastrando" : "Cadastrar"}
        />
      </form>
    </StyledRegisterLoginFormContainer>
  );
};

export default RegisterForm;
