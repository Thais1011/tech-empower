import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { Products } from "../pages/Products/Products";
import { NotFound } from "../pages/NotFound/NotFound";
import { LoggedInLayout } from "../components/Layout/LoggedInLayout/LoggedInLayout";
import Cart from "../pages/Cart/Cart";
import PaymentConfirmation from "../pages/PaymentConfirmation/PaymentConfirmation";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={"/products"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<LoggedInLayout />}>
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/paymentConfirmation"
            element={<PaymentConfirmation />}
          />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
