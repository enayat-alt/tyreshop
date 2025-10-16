import React from "react";

const Contact = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Phone</h3>
          <p className="text-gray-700">📞 7504808550</p>
          <p className="text-gray-700">📞 9853926010</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-gray-700">✉️ khalilmd466@gmail.com</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="text-gray-700">🏠 Salepur, Cuttack, Odisha - 754200</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Working Hours</h3>
          <p className="text-gray-700">🕗 8:00 AM – 8:00 PM (Monday to Sunday)</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
