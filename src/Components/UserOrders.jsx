


import React, { useEffect, useState } from "react";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) return;

    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const userOrders = allOrders.filter(
      (order) => order.userEmail === loggedInUser.email
    );

    setOrders(userOrders);
  }, []);

  if (!orders || orders.length === 0) {
    return <h2 className="text-center mt-10">You have no orders yet.</h2>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">My Orders</h2>

      {orders.map((order) => (
        <div key={order.orderId} className="mb-4 p-4 bg-white shadow rounded">
          <div className="flex justify-between mb-2">
            <span className="font-bold">Order ID:</span>
            <span>{order.orderId}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="font-bold">Total Amount:</span>
            <span>₹{order.totalAmount}</span>
          </div>

          <div className="mb-2">
            <span className="font-bold">Delivery Date:</span>{" "}
            <span>{order.deliveryDate}</span>
          </div>

          <div className="mt-2">
            <span className="font-bold">Products:</span>
            <ul className="mt-1 list-disc list-inside">
              {/* Check if order.products exists, otherwise fallback to single product */}
              {order.products
                ? order.products.map((item) => (
                    <li key={item.id || item.name}>
                      {item.name} - {item.quantity} x ₹{item.price} = ₹
                      {item.quantity * item.price}
                    </li>
                  ))
                : order.product && (
                    <li>
                      {order.product.name} - {order.quantity} x ₹
                      {order.product.price} = ₹
                      {order.totalAmount}
                    </li>
                  )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserOrders;
