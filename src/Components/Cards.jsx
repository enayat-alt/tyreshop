

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

