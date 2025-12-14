import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import shopclone_logo from "../assets/shopclone_logo.png"; 
import "../App.css";

export default function Header() {
  const cart = useCart();
  const total = cart?.reduce((sum, item) => sum + (item.qty || 0), 0) || 0;

  return (
    <header className="header">
      <div className="navbar">
      <div className="logo-container">
      <img src={shopclone_logo} alt="ShopCloneX Logo" className="site-logo" />
      <h1 className="logo-text">ShopCloneX</h1>
    </div>
        <nav className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/">Home</Link>
          <Link to="/cart" className="cart-icon">
            Cart🛒{total > 0 && <span className="cart-count">{total}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}
