import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style/App.scss";

const container = document.getElementById("root");

const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
