

import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = { cart: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": 
      const item = action.payload;
      const exist = state.cart.find((x) => x.id === item.id);

      if (exist) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...item, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((x) => x.id !== action.payload.id) };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((x) =>
          x.id === action.payload.id ? { ...x, quantity: x.quantity + 1 } : x
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((x) =>
          x.id === action.payload.id ? { ...x, quantity: Math.max(1, x.quantity - 1) } : x
        ),
      };

    case "CLEAR_CART": 
      return { ...state, cart: [] };

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return <CartContext.Provider value={{ cart: state.cart, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
