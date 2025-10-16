


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Cards from "./Components/Cards";
import About from "./Components/about";
import Services from "./Components/Services";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Profile from "./Components/Profile";
import Contact from "./Components/Contact";
import AddService from './components/AddService';
import TyreDetails from "./components/TyreDetails";
import OrderSuccess from "./pages/OrderSuccess";
import UserOrders from './components/UserOrders';
import CartPage from './Components/CartPage';
import Footer from "./Components/Footer";
import BuyNowPage from './Components/BuyNowPage';
import PrivateRoute from './Components/PrivateRoute';
import { CartProvider } from "./context/CartContext";

function App() {
  const tyres = [

    { id: 1, name: "Michelin Energy XM2", size: "195/65 R15", price: 4500, image: "/tyres/michelin.jpg" }, // ✅ id added
    { id: 2, name: "Bridgestone Turanza", size: "205/55 R16", price: 5200, image: "/tyres/bridgestone.jpg" },
    { id: 3, name: "MRF ZLX", size: "185/70 R14", price: 3500, image: "/tyres/mrf.jpg" },
    { id: 4, name: "Michelin Energy XM2", size: "195/65 R15", price: 4500, image: "/tyres/michelin.jpg" },
    { id: 5, name: "Bridgestone Turanza", size: "205/55 R16", price: 5200, image: "/tyres/bridgestone.jpg" },
    { id: 6, name: "MRF ZLX", size: "185/70 R14", price: 3500, image: "/tyres/mrf.jpg" },
  ];
  const [user, setUser] = useState(null); // this state tracks the logged-in user

  // When app loads, get user from localStorage
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) setUser(loggedInUser);
  }, []);

  return (
     <CartProvider>
    <Router>
      <Navbar user={user} setUser={setUser} />

      <Routes>
        
        <Route path="/login" element={<Login setUser={setUser} />} />

        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tyres.map((tyre, index) => (
                  <Cards key={index} {...tyre} />
                ))}
              </div>
            </PrivateRoute>
          }
        />
        <Route path="/services" element={<PrivateRoute><Services /></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/add-service" element={<PrivateRoute><AddService /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
        <Route path="/buy-now" element={<PrivateRoute><BuyNowPage /></PrivateRoute>} />
        <Route path="/my-orders" element={<PrivateRoute><UserOrders /></PrivateRoute>} />
        <Route path="/tyre-details" element={<PrivateRoute><TyreDetails /></PrivateRoute>} />
        <Route path="/order-success" element={<PrivateRoute><OrderSuccess /></PrivateRoute>} />

        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="*" element={<h2 className="text-center mt-10">404 Page Not Found</h2>} />
      </Routes>

      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;
