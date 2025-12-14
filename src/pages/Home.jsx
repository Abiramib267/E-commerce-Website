import React, { useEffect, useState } from "react";
import { getAllProducts, getCategories } from "../api/products";
import ProductCard from "../components/ProductCard";
import "../App.css";

export default function HomePage(){
  const [products,setProducts]=useState([]);
  const [cats,setCats]=useState([]);
  const [loading,setLoading]=useState(true);
  const [query,setQuery]=useState("");
  const [category,setCategory]=useState("all");
  const [priceMax,setPriceMax]=useState(20000);
  const [sort,setSort]=useState("relevance");

  useEffect(()=>{
    setLoading(true);
    Promise.all([getAllProducts(), getCategories()])
      .then(([prods, cats]) => {
        setProducts(prods);
        setCats(["all", ...cats]);
      })
      .catch(console.error)
      .finally(()=>setLoading(false));
  },[]);

  const filtered = products
    .filter(p => category === "all" ? true : p.category === category)
    .filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
    .filter(p => p.price * 85 <= priceMax);

  const sorted = [...filtered].sort((a,b)=> {
    if(sort === "price_low") return a.price - b.price;
    if(sort === "price_high") return b.price - a.price;
    return a.id - b.id;
  });
  return (
    <div className="home-wrapper">
          <div className="top-search-bar">
        <input
          className="search-input"
          placeholder="Try Saree, Kurti, Heels..."
          value={query}
          onChange={e=>setQuery(e.target.value)}
        />
  
        <select className="sort-select" value={sort} onChange={e=>setSort(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
        </select>
      </div>
  
      <div className="content-area">
    
        <aside className="filters-card">
          <h3>Filters</h3>
  
          <label>Category</label>
          <select value={category} onChange={e=>setCategory(e.target.value)}>
            {cats.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
  
          <label>Max Price (₹)</label>
          <input
            type="range"
            min={100}
            max={20000}
            step={100}
            value={priceMax}
            onChange={e=>setPriceMax(Number(e.target.value))}
          />
          <div className="price-label">Up to ₹{priceMax}</div>
  
          <button
            className="reset-btn"
            onClick={()=>{
              setCategory("all");
              setQuery("");
              setPriceMax(20000);
              setSort("relevance");
            }}
          >
            Reset
          </button>
        </aside>
          <div className="product-grid">
          {loading ? <p>Loading...</p> :
            sorted.map(p => <ProductCard key={p.id} product={p} />)
          }
        </div>
      </div>
    </div>
  );
}
