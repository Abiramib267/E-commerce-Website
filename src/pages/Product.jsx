import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../api/products";
import { useCartDispatch } from "../context/CartContext";

export default function ProductPage(){
  const { id } = useParams();
  const [product,setProduct] = useState(null);
  const [loading,setLoading] = useState(true);
  const dispatch = useCartDispatch();

  useEffect(()=>{
    setLoading(true);
    getProduct(id).then(p => setProduct(p)).catch(console.error).finally(()=>setLoading(false));
  },[id]);

  if(loading) return <div className="container p-6">Loading...</div>;
  if(!product) return <div className="container p-6">Not found</div>;

  return (
    <div className="container p-6">
      <div className="product-details bg-white p-6 rounded-2xl shadow">
        <div className="details-left">
          <img src={product.image} alt={product.title} style={{width:320,height:320,objectFit:"contain"}} />
        </div>

        <div className="details-right">
          <h2>{product.title}</h2>
          <div className="details-price">₹{Math.round(product.price * 85)}</div>
          <p className="details-desc">{product.description}</p>

          <div style={{display:"flex",gap:10}}>
            <button className="btn" onClick={()=>dispatch({type:"add", payload:{ id:product.id, title:product.title, price:product.price, image:product.image, qty:1 }})}>Add to Cart</button>
            <Link to="/cart" className="btn" style={{background:"#fff", color:"#333", border:"1px solid #ccc"}}>Go to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
