import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">UK Enterprise</h2>
          <p className="text-sm leading-6">
            Your trusted car service partner. From tyre alignment to full car
            servicing — we keep your ride smooth, safe, and ready for every
            journey.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400">Services</Link>
            </li>
            <li>
              <Link to="/tyres" className="hover:text-blue-400">Tyre Details</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm">📍 Cuttack, Odisha</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">✉️ support@ukenterprise.com</p>
          <div className="flex space-x-4 mt-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram text-xl hover:text-pink-500"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook text-xl hover:text-blue-500"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube text-xl hover:text-red-500"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} UK Enterprise. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
