import { Toaster } from "react-hot-toast";
import ModalContent from "./components/Modal/ModalContent";
import { useAnnouncementsContext } from "./providers/AnnouncementsContext";
import { useUserContext } from "./providers/UserContext";
import RoutesMain from "./routes/routes";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const { modalUpdateUserIsOpen, modalUpdateAddressIsOpen } = useUserContext();
  const { modalCreateAnnouncementIsOpen, modalUpdateAnnouncementIsOpen } =
    useAnnouncementsContext();
  return (
    <>
      <GlobalStyle />
      <RoutesMain />
      {modalUpdateUserIsOpen ||
      modalUpdateAddressIsOpen ||
      modalCreateAnnouncementIsOpen ||
      modalUpdateAnnouncementIsOpen ? (
        <ModalContent />
      ) : null}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
