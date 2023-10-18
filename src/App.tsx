import RoutesMain from "./routes/routes";
import { UserProvider } from "./providers/UserContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import { AnnouncementsProvider } from "./providers/AnnouncementsContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <AnnouncementsProvider>
        <UserProvider>
          <RoutesMain />
        </UserProvider>
      </AnnouncementsProvider>
    </>
  );
}

export default App;
