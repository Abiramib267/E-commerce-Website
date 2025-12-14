import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ShopCloneX</h3>
          <p>We provide the best products at the best prices.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <nav className="footer-links">
            <Link to="/">Home</Link>
             <Link to="/login">Login</Link>
            <Link to="/cart">Cart</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" >Facebook</a>
            <a href="https://instagram.com" >Instagram</a>
            <a href="https://twitter.com"> Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 ShopCloneX. All rights reserved.</p>
      </div>
    </footer>
  );
}
