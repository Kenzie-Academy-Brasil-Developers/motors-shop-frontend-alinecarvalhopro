import { SubmitHandler, useForm } from "react-hook-form";
import InputContainer from "../../InputContainer/InputContainer";
import { useUserContext } from "../../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../Button/Button";
import { HeadingH2, TextBody2 } from "../../../styles/Text/text.styled";
import { StyledRegisterLoginFormContainer } from "../../../styles/SheredRegisterLogin/registerForm.styled";
import { loginSchema } from "../../../schemas/user/user.login";

export interface ILoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { submitLogin, loadingLogin, navigate } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const submit: SubmitHandler<ILoginFormData> = (formData) => {
    submitLogin(formData);
  };

  return (
    <StyledRegisterLoginFormContainer>
      <HeadingH2 margin="12px">Login</HeadingH2>
      <form onSubmit={handleSubmit(submit)}>
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.email?.message}
          label="Email"
          id="email"
          type="email"
          placeholder="Digitar e-mail"
          {...register("email")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.password?.message}
          label="Senha"
          id="password"
          type="password"
          placeholder="Digitar senha"
          {...register("password")}
        />
        <Button
          backgroundcolorhover="var(--color-brand-2)"
          type="submit"
          title={loadingLogin ? "Entrando" : "Entrar"}
        />
        <TextBody2
          margin="12px 0 0 0"
          fontWeight="500"
          color="var(--color-blackFixed)"
          style={{textAlign: 'center'}}
        >
          Ainda não possui conta?
        </TextBody2>
        <Button
            margin="16px 0"
            backgroundcolor="var(--color-whiteFixed)"
            bordercolor="var(--color-greyScale-4)"
            textcolor="var(--color-greyScale-0)"
            backgroundcolorhover="var(--color-greyScale-0)"
            title="Cadastrar"
            onClickHandler={() => navigate("/register")}
          />
      </form>
    </StyledRegisterLoginFormContainer>
  );
};

export default LoginForm;
