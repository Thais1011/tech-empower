import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Router from "./routes";
import CartProvider from "./store/CartProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Router />
    </CartProvider>
  </React.StrictMode>
);
