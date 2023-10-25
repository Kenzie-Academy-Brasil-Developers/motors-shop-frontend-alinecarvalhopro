import styled from "styled-components";

export const StyledModalContainer = styled.div`
  max-width: 100%;

  padding-bottom: 200px;
  
  background-color: #00000080;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
  }
`;

export const StyledModal = styled.div`
  width: calc(100% - 64px);
  
  margin: 80px 16px 16px 16px;
  
  border-radius: 4px;

  background-color: var(--color-whiteFixed);

  padding: 16px;

  display: flex;
  flex-direction: column;

  .titleCloseModalBox {
    margin: 20px 0;

    padding: 0;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 769px) {
    width: 520px;

    margin: 80px 0 0 0;
  }
`;
