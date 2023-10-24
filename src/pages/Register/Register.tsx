import Footer from "../../components/Footer/Footer";
import { Header, HeaderMenu } from "../../components/Header/Header";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";
import { StyledRegisterLoginMain } from "../../styles/SheredRegisterLogin/registerLoginMain.styled";
import { StyledPageContainer } from "../../styles/SheredRegisterLogin/pageContainer";
import { useEffect } from "react";
import { useUserContext } from "../../providers/UserContext";

const Register = () => {
  const { getLoggedInUser } = useUserContext();

  useEffect(() => {
    getLoggedInUser();
  });
  
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
