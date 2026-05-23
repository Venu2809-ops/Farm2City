import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App.jsx";
import { ToastProvider } from "./context/ToastContext";

import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <ToastProvider>
      <CartProvider>
        <App />
     </CartProvider>
    </ToastProvider>

  </React.StrictMode>
);