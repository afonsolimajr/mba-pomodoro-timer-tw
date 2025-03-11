import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { CyclesContextProvider } from "./contexts/CyclesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CyclesContextProvider>
        <App />
      </CyclesContextProvider>
    </BrowserRouter>
  </StrictMode>
);
