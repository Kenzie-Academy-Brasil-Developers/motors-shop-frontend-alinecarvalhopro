import { useEffect } from "react";
import { useUserContext } from "../../providers/UserContext";
import { Header, HeaderMenu } from "../../components/Header/Header";
import { StyledRegisterLoginMain } from "../../styles/SheredRegisterLogin/registerLoginMain.styled";
import { StyledPageContainer } from "./pageContainer";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";
// import Footer from "../../components/Footer/Footer";

const Register = () => {
  const { getLoggedInUser } = useUserContext();

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <StyledPageContainer>
      <Header>
        <HeaderMenu />
      </Header>
      <StyledRegisterLoginMain>
        <RegisterForm />
      </StyledRegisterLoginMain>
      {/* <Footer /> */}
    </StyledPageContainer>
  );
};

export default Register;
