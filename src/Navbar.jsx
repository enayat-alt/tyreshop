import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./features/authSlice";
import { useCart } from "./context/CartContext"; // ✅ import Cart context

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux user
  const user = useSelector((state) => state.auth.user);

  // Cart from context
  const { cart } = useCart(); // ✅ get cart items

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex flex-wrap justify-between items-center shadow-md relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold cursor-pointer">
        <Link to="/">Uk Enterprise</Link>
      </h1>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Nav Links */}
      <ul
        className={`${
          open ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-blue-600 md:static md:flex md:w-auto md:gap-6 text-lg`}
      >
        <li className="p-3 hover:bg-blue-700 cursor-pointer">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        </li>
        <li className="p-3 hover:bg-blue-700 cursor-pointer">
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        </li>
        <li className="p-3 hover:bg-blue-700 cursor-pointer">
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
        </li>
        <li className="p-3 hover:bg-blue-700 cursor-pointer">
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </li>
        <li className="p-3 hover:bg-blue-700 cursor-pointer">
          <Link to="/add-service" onClick={() => setOpen(false)}>Add Service</Link>
        </li>
        {user && (
          <li className="p-3 hover:bg-blue-700 cursor-pointer">
            <Link to="/my-orders" onClick={() => setOpen(false)}>My Orders</Link>
          </li>
        )}
      </ul>

      {/* Auth + Cart Buttons */}
      <div className="hidden md:flex gap-2 items-center">
        {/* Cart Icon */}
        <Link to="/cart">
          <div className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9"
              />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </div>
        </Link>

        {/* User Auth Buttons */}
        {user ? (
          <>
            <Link to="/profile">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100">
                Profile
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100">
                Signup
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

