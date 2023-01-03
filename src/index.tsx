import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import App from "./App";

import { LoadingProvider } from "./context/loading";
import { ThemeProvider } from "./context/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </ThemeProvider>
    <ToastContainer position="top-right" theme="dark" />
  </React.StrictMode>
);
