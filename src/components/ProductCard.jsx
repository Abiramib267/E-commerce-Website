import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartDispatch } from "../context/CartContext";
import "../App.css";
export default function ProductCard({ product }){
  const dispatch = useCartDispatch();
  const nav = useNavigate();

  function add(){
    dispatch({ type: "add", payload: { id: product.id, title: product.title, price: product.price, image: product.image, qty: 1 } });
  }

  return (
    <div className="product-card" onDoubleClick={add}>
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-title">{product.title}</div>
      <div className="product-price">₹{Math.round(product.price * 85)}</div>

      <div style={{display:"flex",gap:8,marginTop:10}}>
        <button className="btn" onClick={() => nav(`/product/${product.id}`)}>View</button>
        <button className="btn" onClick={add} style={{background:"#e83f6f"}}>Add</button>
      </div>
    </div>
  );
}
