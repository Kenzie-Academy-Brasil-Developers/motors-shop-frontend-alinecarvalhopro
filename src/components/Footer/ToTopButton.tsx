import { StyledToTopButton } from "./toTopButton.style";
import ImageButton from "../../assets/ctrl.svg";
import { useUserContext } from "../../providers/UserContext";

const ToTopButton = () => {
  const { scrollToTop } = useUserContext();

  return (
    <StyledToTopButton onClick={scrollToTop}>
      <img src={ImageButton} color="var(--color-whiteFixed)" />
    </StyledToTopButton>
  );
};

export default ToTopButton;
