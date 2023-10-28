import { Header, HeaderMenu } from "../../components/Header/Header";
import { StyledRegisterLoginMain } from "../../styles/SheredRegisterLogin/registerLoginMain.styled";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { StyledPageContainer } from "../../styles/SheredRegisterLogin/pageContainer";
import Footer from "../../components/Footer/Footer";
import { useUserContext } from "../../providers/UserContext";
import { useEffect } from "react";

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
      <Footer />
    </StyledPageContainer>
  );
};

export default Login;
