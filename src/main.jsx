import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartsProv from "./Components/cart/CartsProv";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartsProv>
      {" "}
      <App />
    </CartsProv>
  </BrowserRouter>
);
