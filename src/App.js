import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import CartPage from "./pages/Cart";
import LoginPage from "./pages/Login";
import Footer from "./components/Footer";


export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <UserProvider>
        <Header />
       
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>

        <Footer />
          </UserProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
