// import React from "react";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const CartPage = () => {
//   const { cart, dispatch } = useCart();
//   const navigate = useNavigate();

//   const handleBuyNow = (item) => {
//     // Redirect to BuyNowPage with selected tyre
//     navigate("/buy-now", { state: { tyre: item } });
//   };

//   if (cart.length === 0) return <h2 className="text-center mt-10">Your cart is empty</h2>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

//       {cart.map((item) => (
//         <div
//           key={item.id}
//           className="flex justify-between items-center mb-4 p-4 bg-white shadow rounded"
//         >
//           <div className="flex items-center gap-4">
//             <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
//             <div>
//               <h3 className="font-bold">{item.name}</h3>
//               <p>{item.size}</p>
//               <p>₹{item.price * item.quantity}</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item })}
//               className="px-2 py-1 bg-yellow-500 text-white rounded"
//             >
//               -
//             </button>
//             <span>{item.quantity}</span>
//             <button
//               onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item })}
//               className="px-2 py-1 bg-green-500 text-white rounded"
//             >
//               +
//             </button>
//             <button
//               onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
//               className="px-2 py-1 bg-red-500 text-white rounded"
//             >
//               Remove
//             </button>

//             <button
//               onClick={() => handleBuyNow(item)}
//               className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       ))}

//       <div className="mt-6 text-right">
//         <button
//           onClick={() => dispatch({ type: "CLEAR_CART" })}
//           className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
//         >
//           Clear Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    if (cart.length === 0) return alert("Cart is empty!");
    navigate("/buy-now", { state: { cart } });
  };

  if (cart.length === 0) return <h2 className="text-center mt-10">Your cart is empty</h2>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-4 p-4 bg-white shadow rounded">
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p>{item.size}</p>
              <p>₹{item.price * item.quantity}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item })} className="px-2 py-1 bg-yellow-500 text-white rounded">-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item })} className="px-2 py-1 bg-green-500 text-white rounded">+</button>
            <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })} className="px-2 py-1 bg-red-500 text-white rounded">Remove</button>
          </div>
        </div>
      ))}
      <div className="mt-6 text-right">
        <button onClick={handleBuyNow} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CartPage;

