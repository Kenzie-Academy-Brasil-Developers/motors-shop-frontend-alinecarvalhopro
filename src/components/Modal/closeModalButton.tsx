import { useUserContext } from "../../providers/UserContext";
import { StyledCloseModalButton } from "./closeModalButton.style";

const CloseModalButton = () => {
  const { setModalUpdateUserIsOpen, setModalUpdateAddressIsOpen } = useUserContext();
  const closeModal = () => {
    setModalUpdateUserIsOpen(false);
    setModalUpdateAddressIsOpen(false);
  };

  return (
    <StyledCloseModalButton onClick={closeModal}>X</StyledCloseModalButton>
  );
};

export default CloseModalButton;
