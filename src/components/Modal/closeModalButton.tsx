import { StyledCloseModalButton } from "./closeModalButton.style";

const CloseModalButton = () => {
  const closeModal = () => {};

  return (
    <StyledCloseModalButton onClick={closeModal}>X</StyledCloseModalButton>
  );
};

export default CloseModalButton;
