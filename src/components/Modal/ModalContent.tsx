import { useUserContext } from "../../providers/UserContext";
import EditAddressForm from "../Forms/EditAddressForm/EditAddressForm";
import EditUserForm from "../Forms/EditUserForm/EditUserForm";
import Modal from "./Modal";

const ModalContent = () => {
  const { modalUpdateUserIsOpen, modalUpdateAddressIsOpen } = useUserContext();

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
  }
};

export default ModalContent;
