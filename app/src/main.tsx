import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import { App } from "./App.tsx";
import "./index.css";
// import { ToggleColorMode } from "./pages/Home";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
