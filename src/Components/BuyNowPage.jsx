import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const BuyNowPage = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Get logged-in user on load
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
      setFormData((prev) => ({
        ...prev,
        name: loggedInUser.name,
        email: loggedInUser.email,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login to place an order.");
      navigate("/login");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Save order
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const totalAmount = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const newOrder = {
      orderId: Date.now(),
      userEmail: user.email,
      products: cart,
      totalAmount,
      deliveryDate: new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
      customerDetails: formData, // ✅ include form info
    };

    allOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(allOrders));

    // Clear cart
    dispatch({ type: "CLEAR_CART" });

    alert("Order submitted successfully!");
    navigate("/order-success", { state: newOrder });
  };

  if (cart.length === 0)
    return <h2 className="text-center mt-10">Your cart is empty</h2>;

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>

      <div className="mb-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <div className="font-bold mt-2 flex justify-between">
          <span>Total</span>
          <span>
            ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
          </span>
        </div>
      </div>

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 font-bold"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default BuyNowPage;
