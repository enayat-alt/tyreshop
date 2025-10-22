
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, Suspense } from "react";
import Navbar from "./Navbar";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import PrivateRoute from './Components/PrivateRoute';
import { CartProvider } from "./context/CartContext";
import Login from "./views/Login";
import Signup from "./views/Signup";

// 🔥 Lazy Load Components
const About = React.lazy(() => import("./Components/about"));
const Services = React.lazy(() => import("./Components/Services"));
const Profile = React.lazy(() => import("./Components/Profile"));
const Contact = React.lazy(() => import("./Components/Contact"));
const AddService = React.lazy(() => import("./Components/AddService"));
const TyreDetails = React.lazy(() => import("./Components/TyreDetails"));
const OrderSuccess = React.lazy(() => import("./pages/OrderSuccess"));
const UserOrders = React.lazy(() => import("./Components/UserOrders"));
const CartPage = React.lazy(() => import("./Components/CartPage"));
const BuyNowPage = React.lazy(() => import("./Components/BuyNowPage"));

function App() {
  const tyres = [
    { id: 1, name: "Michelin Energy XM2", size: "195/65 R15", price: 4500, image: "/tyres/michelin.jpg" },
    { id: 2, name: "Bridgestone Turanza", size: "205/55 R16", price: 5200, image: "/tyres/bridgestone.jpg" },
    { id: 3, name: "MRF ZLX", size: "185/70 R14", price: 3500, image: "/tyres/mrf.jpg" },
    { id: 4, name: "Michelin Energy XM2", size: "195/65 R15", price: 4500, image: "/tyres/michelin.jpg" },
    { id: 5, name: "Bridgestone Turanza", size: "205/55 R16", price: 5200, image: "/tyres/bridgestone.jpg" },
    { id: 6, name: "MRF ZLX", size: "185/70 R14", price: 3500, image: "/tyres/mrf.jpg" },
  ];

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) setUser(loggedInUser);
  }, []);

  return (
    <CartProvider>
      <Router>
        <Navbar user={user} setUser={setUser} />

        {/* 🔄 Suspense Fallback UI while lazy components load */}
        <Suspense fallback={<div className="text-center mt-10 text-lg">🛞 Loading Tyre Shop...</div>}>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<Signup />} />

            {/* All Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route
                path="/"
                element={
                  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {tyres.map((tyre, index) => (
                      <Cards key={index} {...tyre} />
                    ))}
                  </div>
                }
              />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/add-service" element={<AddService />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/buy-now" element={<BuyNowPage />} />
              <Route path="/my-orders" element={<UserOrders />} />
              <Route path="/tyre-details" element={<TyreDetails />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/about" element={<About />} />
            </Route>

            {/* 404 Page */}
            <Route path="*" element={<h2 className="text-center mt-10">404 Page Not Found</h2>} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
