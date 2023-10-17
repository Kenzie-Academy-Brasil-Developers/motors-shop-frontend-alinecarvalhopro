import Footer from "../../components/Footer/Footer";
import { Header, HeaderMenu } from "../../components/Header/Header";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";
import { StyledRegisterLoginMain } from "../../styles/SheredRegisterLogin/registerLoginMain.styled";

const Register = () => {
  return (
    <>
      <Header><HeaderMenu/></Header>
      <StyledRegisterLoginMain>
        <RegisterForm />
      </StyledRegisterLoginMain>
      <Footer />
    </>
  );
};

export default Register;
