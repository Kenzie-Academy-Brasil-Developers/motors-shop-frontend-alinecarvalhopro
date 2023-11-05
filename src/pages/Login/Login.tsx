import { useEffect } from "react";
import { useUserContext } from "../../providers/UserContext";
import { StyledPageContainer } from "./pageContainer";
import { Header, HeaderMenu } from "../../components/Header/Header";
import { StyledRegisterLoginMain } from "../../styles/SheredRegisterLogin/registerLoginMain.styled";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
// import Footer from "../../components/Footer/Footer";

const Login = () => {
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
        <LoginForm />
      </StyledRegisterLoginMain>
      {/* <Footer /> */}
    </StyledPageContainer>
  );
};

export default Login;
