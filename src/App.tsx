import RoutesMain from "./routes/routes";
import { UserProvider } from "./providers/UserContext";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  );
}

export default App;
