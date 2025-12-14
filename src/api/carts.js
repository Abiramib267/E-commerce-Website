const BASE = "https://fakestoreapi.com";

export async function getAllCarts() {
  const res = await fetch(`${BASE}/carts`);
  return res.json(); 
}

export async function getUserCarts(userId) {
  const res = await fetch(`${BASE}/carts/user/${userId}`);
  return res.json(); 
}