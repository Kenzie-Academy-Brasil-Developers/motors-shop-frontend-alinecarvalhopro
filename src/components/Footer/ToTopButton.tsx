import { StyledToTopButton } from "./toTopButton.style";
import ImageButton from "../../assets/ctrl.svg";

const ToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <StyledToTopButton onClick={scrollToTop}>
      <img src={ImageButton} color="var(--color-whiteFixed)" />
    </StyledToTopButton>
  );
};

export default ToTopButton;


