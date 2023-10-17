import { Header, HeaderMenu } from "../../components/Header/Header";
import { StyledRegisterLoginMain } from "../../styles/SheredRegisterLogin/registerLoginMain.styled";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";

const Login = () => {
  return (
    <>
      <Header><HeaderMenu/></Header>
      <StyledRegisterLoginMain>
        <LoginForm />
      </StyledRegisterLoginMain>
    </>
  );
};

export default Login;