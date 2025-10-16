import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TyreDetails = () => {
  const navigate = useNavigate();
  const { product } = useLocation().state || {};

  if (!product) return <p>No tyre details found.</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "20px", padding: "8px 12px", borderRadius: "6px", backgroundColor: "#2563eb", color: "#fff", border: "none", cursor: "pointer" }}>
        ← Back
      </button>
      <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "12px", objectFit: "cover", marginBottom: "20px" }} />
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>{product.name}</h2>
      <p><strong>Size:</strong> {product.size}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p style={{ marginTop: "10px" }}>{product.description || "No additional details provided."}</p>
    </div>
  );
};

export default TyreDetails;
