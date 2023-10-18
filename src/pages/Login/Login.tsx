import { Header, HeaderMenu } from "../../components/Header/Header";
import { StyledRegisterLoginMain } from "../../styles/SheredRegisterLogin/registerLoginMain.styled";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { StyledPageContainer } from "../../styles/SheredRegisterLogin/pageContainer";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <StyledPageContainer>
      <Header>
        <HeaderMenu />
      </Header>
      <StyledRegisterLoginMain>
        <LoginForm />
      </StyledRegisterLoginMain>
      <Footer />
    </StyledPageContainer>
  );
};

export default Login;
