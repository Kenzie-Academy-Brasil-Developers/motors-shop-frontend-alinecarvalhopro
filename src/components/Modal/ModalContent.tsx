import { useAnnouncementsContext } from "../../providers/AnnouncementsContext";
import { useUserContext } from "../../providers/UserContext";
import CreateAnnouncementForm from "../Forms/CreateAnnouncementForm/CreateAnnouncementForm";
import EditAddressForm from "../Forms/EditAddressForm/EditAddressForm";
import EditAnnouncementForm from "../Forms/EditAnnouncementForm/EditAnnouncementForm";
import EditUserForm from "../Forms/EditUserForm/EditUserForm";
import Modal from "./Modal";

const ModalContent = () => {
  const { modalUpdateUserIsOpen, modalUpdateAddressIsOpen } = useUserContext();
  const { modalCreateAnnouncementIsOpen, modalUpdateAnnouncementIsOpen } =
    useAnnouncementsContext();

  if (modalUpdateUserIsOpen) {
    return (
      <>
        {modalUpdateUserIsOpen ? (
          <Modal title="Informações Pessoais">
            <EditUserForm />
          </Modal>
        ) : null}
      </>
    );
  } else if (modalUpdateAddressIsOpen) {
    return (
      <>
        {modalUpdateAddressIsOpen ? (
          <Modal title="Editar endereço">
            <EditAddressForm />
          </Modal>
        ) : null}
      </>
    );
  } else if (modalCreateAnnouncementIsOpen) {
    return (
      <>
        {modalCreateAnnouncementIsOpen ? (
          <Modal title="Criar anúncio">
            <CreateAnnouncementForm />
          </Modal>
        ) : null}
      </>
    );
  } else if (modalUpdateAnnouncementIsOpen) {
    return (
      <>
        {modalUpdateAnnouncementIsOpen ? (
          <Modal title="Editar anúncio">
            <EditAnnouncementForm />
          </Modal>
        ) : null}
      </>
    );
  }
};

export default ModalContent;
