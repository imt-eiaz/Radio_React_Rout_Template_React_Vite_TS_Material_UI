import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
=======
import { BrowserRouter } from "react-router";
>>>>>>> 38a3c19f9e534c27a4d52e7dde3f7dc90a69ca2e

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
