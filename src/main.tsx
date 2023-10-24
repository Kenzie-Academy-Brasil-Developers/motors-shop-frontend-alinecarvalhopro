import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/UserContext.tsx";
import { AnnouncementsProvider } from "./providers/AnnouncementsContext.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
        <UserProvider>
          <AnnouncementsProvider>
            <App />
          </AnnouncementsProvider>
        </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
