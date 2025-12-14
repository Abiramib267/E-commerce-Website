import React from "react";
import { useCart, useCartDispatch } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../App.css";
export default function CartPage() {
  const cart = useCart();
  const dispatch = useCartDispatch();

  const subtotal = cart.reduce((s, i) => s + i.price * 85 * i.qty, 0);

  function changeQty(id, qty) {
    if (qty <= 0) dispatch({ type: "remove", payload: id });
    else dispatch({ type: "update", payload: { id, qty } });
  }

  return (
    <div style={{ maxWidth: 1000, margin: "24px auto", padding: "0 16px" }}>
      <h1 style={{ textAlign: "center", marginBottom: 8 }}>Your Cart</h1>
      {cart.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            background: "#fff",
            padding: "16px 20px",
            borderRadius: 8,
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          }}
        >
          Cart empty. <Link to="/">Shop now</Link>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 2fr) minmax(260px, 1fr)",
            gap: 20,
            alignItems: "flex-start",
          }}
        >
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-img"
                />
                <div className="cart-info">
                  <div className="cart-title">{item.title}</div>
                  <div className="cart-price">
                    ₹{Math.round(item.price * 85)}
                  </div>
                  <div className="qty-box">
                    <button
                      className="qty-btn"
                      onClick={() => changeQty(item.id, item.qty - 1)}
                    >
                      -
                    </button>
                    <div>{item.qty}</div>
                    <button
                      className="qty-btn"
                      onClick={() => changeQty(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() =>
                        dispatch({ type: "remove", payload: item.id })
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <h3>Order Summary</h3>
            <p>Subtotal: ₹{Math.round(subtotal)}</p>
            <button
              className="btn"
              style={{ marginTop: 12, width: "100%" }}
              onClick={() => alert("Place order placeholder")}
            >
              Place Order
            </button>
            <button
              className="btn btn-outline"
              style={{ marginTop: 8, width: "100%" }}
              onClick={() => dispatch({ type: "clear" })}
            >
              Clear Cart
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
