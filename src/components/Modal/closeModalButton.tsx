import { useAnnouncementsContext } from "../../providers/AnnouncementsContext";
import { useUserContext } from "../../providers/UserContext";
import { StyledCloseModalButton } from "./closeModalButton.style";

const CloseModalButton = () => {
  const { setModalUpdateUserIsOpen, setModalUpdateAddressIsOpen } =
    useUserContext();

  const {
    setModalCreateAnnouncementIsOpen,
    setModalUpdateAnnouncementIsOpen,
    removeAnnouncementIdLocalStorage,
  } = useAnnouncementsContext();

  const closeModal = () => {
    setModalUpdateUserIsOpen(false);
    setModalUpdateAddressIsOpen(false);
    setModalCreateAnnouncementIsOpen(false);
    setModalUpdateAnnouncementIsOpen(false);
    removeAnnouncementIdLocalStorage();
  };

  return (
    <StyledCloseModalButton onClick={closeModal}>X</StyledCloseModalButton>
  );
};

export default CloseModalButton;
