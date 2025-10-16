import React from "react";

import logo from "../assets/tyre-logo.png"; // Replace with your logo path

const About = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <img
          src={logo}
          alt="UK Enterprise Tyres"
          className="mx-auto w-32 h-32 object-contain mb-6"
        />

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          UK Enterprise Tyre Showroom
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg mb-6">
          UK Enterprise Tyres is your trusted destination for high-quality tyres,
          wheels, and auto services in the UK. We provide a wide range of tyres
          for cars, SUVs, and commercial vehicles with expert fitting and
          maintenance services.
        </p>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-left">
          <div>
            <h2 className="text-xl font-semibold mb-2">Our Services</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Tyre Sales & Fitting</li>
              <li>Wheel Alignment & Balancing</li>
              <li>Car Maintenance & Repairs</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <p className="text-gray-700">
              salipur sapanpur <br />
              odisha near bajaj showroom <br />
              Email: ukenterprise@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
