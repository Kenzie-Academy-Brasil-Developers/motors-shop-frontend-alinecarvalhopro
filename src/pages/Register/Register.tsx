import Footer from "../../components/Footer/Footer";
import { Header, HeaderMenu } from "../../components/Header/Header";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";
import { StyledRegisterLoginMain } from "../../styles/SheredRegisterLogin/registerLoginMain.styled";
import { StyledPageContainer } from "../../styles/SheredRegisterLogin/pageContainer";

const Register = () => {
  return (
    <StyledPageContainer>
      <Header>
        <HeaderMenu />
      </Header>
      <StyledRegisterLoginMain>
        <RegisterForm />
      </StyledRegisterLoginMain>
      <Footer />
    </StyledPageContainer>
  );
};

export default Register;
