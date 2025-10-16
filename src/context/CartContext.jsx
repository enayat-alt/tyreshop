// import React, { createContext, useReducer, useContext } from "react";

// // Initial cart state
// const initialCart = [];

// // Reducer
// function cartReducer(state, action) {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const existing = state.find(item => item.id === action.payload.id);
//       if (existing) {
//         return state.map(item =>
//           item.id === action.payload.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...state, { ...action.payload, quantity: 1 }];
//       }

//     case "REMOVE_FROM_CART":
//       return state.filter(item => item.id !== action.payload.id);

//     case "INCREASE_QUANTITY":
//       return state.map(item =>
//         item.id === action.payload.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );

//     case "DECREASE_QUANTITY":
//       return state.map(item =>
//         item.id === action.payload.id
//           ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
//           : item
//       );

//     case "CLEAR_CART":
//       return [];

//     default:
//       return state;
//   }
// }

// // Create context
// const CartContext = createContext();

// // Provider component
// export function CartProvider({ children }) {
//   const [cart, dispatch] = useReducer(cartReducer, initialCart);
//   return (
//     <CartContext.Provider value={{ cart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// // Custom hook to use cart
// export function useCart() {
//   return useContext(CartContext);
// }


import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = { cart: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": // ✅ UPDATED
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

    case "CLEAR_CART": // ✅ NEW
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
