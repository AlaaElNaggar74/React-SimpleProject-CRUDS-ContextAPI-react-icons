import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginContextProvider } from "./Component/Context/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
