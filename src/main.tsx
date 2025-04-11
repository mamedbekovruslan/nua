import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./config/Global.module.scss";
import { App } from "./config/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
