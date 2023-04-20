import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "@pages/App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@hoc/AuthProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
