import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { Products } from "../pages/Products/Products";
import { NotFound } from "../pages/NotFound/NotFound";
import { LoggedInLayout } from "../components/Layout/LoggedInLayout/LoggedInLayout";
import Cart from "../pages/Cart/Cart";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route element={<LoggedInLayout />}>
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
