import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Products } from "../pages/Products";
import { NotFound } from "../pages/NotFound";


export const AppRouter = () => {
    console.log('oi');

    return (
        
                <Route path="/login" component={<Login />} />
                <Route path="/register" component={<Register />} />
                <Route path="/not-found" component={NotFound} />
                <Route path="/products" component={<Products />} />

        <
    );
  };