
// // // import React from "react";
// // // import { useNavigate } from "react-router-dom";

// // // const Cards = ({ name, size, price, image }) => {
// // //   const navigate = useNavigate();

// // //   const handleBuyNow = () => {
// // //     navigate("/buy-now", { state: { product: { name, size, price, image } } });
// // //   };

// // //   return (
// // //     <div style={{ maxWidth: "300px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff", margin: "10px" }}>
// // //       <img src={image} alt={name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
// // //       <div style={{ padding: "16px" }}>
// // //         <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{name}</h2>
// // //         <p>Size: {size}</p>
// // //         <p style={{ fontWeight: "bold" }}>Price: ₹{price}</p>
// // //       </div>
// // //       <div style={{ display: "flex", justifyContent: "space-between", padding: "0 16px 16px" }}>
// // //         <button onClick={handleBuyNow} style={{ backgroundColor: "#2563eb", color: "white", border: "none", padding: "8px 12px", borderRadius: "8px", cursor: "pointer" }}>
// // //           Buy Now
// // //         </button>
// // //         <button style={{ backgroundColor: "#ccc", border: "none", padding: "8px 12px", borderRadius: "8px", cursor: "pointer" }}>
// // //           Details
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Cards;

// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // const Cards = ({ name, size, price, image, description }) => {
// //   const navigate = useNavigate();

// //   const handleBuyNow = () => {
// //     navigate("/buy-now", { state: { product: { name, size, price, image } } });
// //   };

// //   const handleDetails = () => {
// //     navigate("/tyre-details", { state: { product: { name, size, price, image, description } } });
// //   };

// //   return (
// //     <div style={{ maxWidth: "300px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff", margin: "10px" }}>
// //       <img src={image} alt={name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
// //       <div style={{ padding: "16px" }}>
// //         <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{name}</h2>
// //         <p>Size: {size}</p>
// //         <p style={{ fontWeight: "bold" }}>Price: ₹{price}</p>
// //       </div>
// //       <div style={{ display: "flex", justifyContent: "space-between", padding: "0 16px 16px" }}>
// //         <button onClick={handleBuyNow} style={{ backgroundColor: "#2563eb", color: "white", border: "none", padding: "8px 12px", borderRadius: "8px", cursor: "pointer" }}>
// //           Buy Now
// //         </button>
// //         <button onClick={handleDetails} style={{ backgroundColor: "#ccc", border: "none", padding: "8px 12px", borderRadius: "8px", cursor: "pointer" }}>
// //           Details
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cards;

// import React from "react";
// import { useCart } from "../context/CartContext";

// const Cards = ({ id, name, size, price, image }) => {
//   const { dispatch } = useCart();

//   const addToCart = () => {
//     dispatch({ type: "ADD_TO_CART", payload: { id, name, size, price, image } });
//   };

//   return (
//     <div className="bg-white shadow p-4 rounded">
//       <img src={image} alt={name} className="w-full h-40 object-cover mb-2" />
//       <h3 className="font-bold">{name}</h3>
//       <p>{size}</p>
//       <p>₹{price}</p>
//       <button
//         onClick={addToCart}
//         className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default Cards;

import React from "react";
import { useCart } from "../context/CartContext";

const Cards = ({ id, name, size, price, image }) => {
  const { dispatch } = useCart();

  return (
    <div className="p-4 bg-white shadow rounded">
      <img src={image} alt={name} className="w-full h-40 object-cover mb-2" />
      <h3 className="font-bold">{name}</h3>
      <p>{size}</p>
      <p>₹{price}</p>
      <button
        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 mt-2"
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: { id, name, size, price, image } })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Cards;

