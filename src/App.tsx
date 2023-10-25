import ModalContent from "./components/Modal/ModalContent";
import { useUserContext } from "./providers/UserContext";
import RoutesMain from "./routes/routes";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const { modalUpdateUserIsOpen, modalUpdateAddressIsOpen } = useUserContext();
  return (
    <>
      <GlobalStyle />
      <RoutesMain />
      {modalUpdateUserIsOpen || modalUpdateAddressIsOpen ? (
        <ModalContent />
      ) : null}
    </>
  );
}

export default App;
