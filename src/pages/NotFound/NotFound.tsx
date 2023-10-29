import ImageNotFound from "../../assets/notFound.png";
import Button from "../../components/Button/Button";
import { useUserContext } from "../../providers/UserContext";
import { StyledPageContainer } from "./notFound.style";

export const NotFound = () => {
  const { navigate } = useUserContext();
  return (
    <StyledPageContainer>
      <img
        onClick={() => navigate("/home")}
        className="Página não encontrada"
        src={ImageNotFound}
      />
      <Button
        title="Retornar para a Home"
        backgroundcolor="transparent"
        textcolor="var(--color-brand-1)"
        width="250px"
        onClickHandler={() => navigate('/home')}
      />
    </StyledPageContainer>
  );
};

export default NotFound;
