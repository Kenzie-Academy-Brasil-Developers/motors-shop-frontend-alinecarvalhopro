import { HeadingH3 } from "../../styles/Text/text.styled";
import CloseModalButton from "./closeModalButton";
import { StyledModal, StyledModalContainer } from "./modal.styled";

interface ModalProps {
  children: React.ReactNode;
  title: string;
}

const Modal = ({ children, title }: ModalProps) => {
  return (
    <StyledModalContainer role="dialog">
      <StyledModal>
        <div className="titleCloseModalBox">
          <HeadingH3>{title}</HeadingH3>
          <CloseModalButton />
        </div>
        {children}
      </StyledModal>
    </StyledModalContainer>
  );
};

export default Modal;
