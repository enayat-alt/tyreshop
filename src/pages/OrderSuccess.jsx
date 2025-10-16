

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, totalAmount, deliveryDate, product } = location.state || {};

  useEffect(() => {
    // Get logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) return;

    // Get existing orders from localStorage
    const allOrders = JSON.parse(localStorage.getItem("userOrders")) || {};

    // Initialize this user's orders array if not exists
    if (!allOrders[loggedInUser.email]) {
      allOrders[loggedInUser.email] = [];
    }

    // Add new order
    allOrders[loggedInUser.email].push({
      orderId,
      product,
      totalAmount,
      deliveryDate,
      date: new Date().toISOString(),
    });

    // Save back to localStorage
    localStorage.setItem("userOrders", JSON.stringify(allOrders));
  }, [orderId, product, totalAmount, deliveryDate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h2 style={{ color: "green" }}>✅ Order Successful!</h2>
      <p>Order ID: <strong>{orderId}</strong></p>
      <p>Product: {product?.name}</p>
      <p>Total Amount: ₹{totalAmount}</p>
      <p>Expected Delivery: {deliveryDate}</p>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          borderRadius: "8px",
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default OrderSuccess;

