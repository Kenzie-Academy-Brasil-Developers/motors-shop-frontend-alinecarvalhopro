import styled from "styled-components";

interface ModalProps {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}

export const StyledModalContainer = styled.div`
  max-width: 100%;
  height: 100%;

  background-color: #00000080;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const StyledModal = styled.div<ModalProps>`
  ${(props) => (props.width ? `width: ${props.width};` : "width: 100%;")}
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  
  border-radius: 4px;

  background-color: var(--color-whiteFixed);

  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}

  display: flex;
  flex-direction: column;

  .titleCloseModalBox {
    margin: 20px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
