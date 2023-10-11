import { HeadingH3 } from "../Text/text.styled";
import CloseModalButton from "./closeModalButton";
import { StyledModal, StyledModalContainer } from "./modal.styled";

interface ModalProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  title: string;
}

const Modal = ({
  children,
  width,
  height,
  margin,
  padding,
  title,
}: ModalProps) => {
  return (
    <StyledModalContainer role="dialog">
      <StyledModal
        width={width}
        height={height}
        margin={margin}
        padding={padding}
      >
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
