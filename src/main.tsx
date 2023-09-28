import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

export const ENABLE_REACT_STRICT_MODE = true;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  ENABLE_REACT_STRICT_MODE ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  ),
);
