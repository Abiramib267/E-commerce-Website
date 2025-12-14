import React, { createContext, useContext, useEffect, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

function cartReducer(state, action){
  switch(action.type){
    case "hydrate": return action.payload || [];
    case "add": {
      const found = state.find(i => i.id === action.payload.id);
      if(found) return state.map(i => i.id === action.payload.id ? { ...i, qty: i.qty + action.payload.qty } : i);
      return [...state, action.payload];
    }
    case "update":
      return state.map(i => i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i);
    case "remove":
      return state.filter(i => i.id !== action.payload);
    case "clear": return [];
    default: throw new Error("Unknown action");
  }
}

export function CartProvider({ children }){
  const [state, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const raw = localStorage.getItem("shoping_cart_v1");
    if(raw) dispatch({ type: "hydrate", payload: JSON.parse(raw) });
  }, []);

  useEffect(() => {
    localStorage.setItem("shoping_cart_v1", JSON.stringify(state));
  }, [state]);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

export const useCart = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
