import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { Products } from "../pages/Products/Products";
import { NotFound } from "../pages/NotFound/NotFound";
import { LoggedInLayout } from "../components/Layout/LoggedInLayout/LoggedInLayout";

//ainda nao está pronta


export default function  Router ()  {
    console.log('oi');

    return (
      <BrowserRouter>
        <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/not-found" element={<NotFound/>} />
                <Route element={<LoggedInLayout/>}>
                  <Route path="/products" element={<Products />} />
                </Route>
                
        </Routes>
      </BrowserRouter>
        
    );
  }