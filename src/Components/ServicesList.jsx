import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService } from '../features/servicesSlice';

const ServicesList = () => {
  const services = useSelector(state => state.services.services);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#2563eb" }}>Our Services</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {services.map(service => (
          <li key={service.id} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f9f9f9",
            marginBottom: "10px",
            padding: "10px 15px",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.08)"
          }}>
            <span>{service.name}</span>
            <button
              onClick={() => handleRemove(service.id)}
              style={{
                backgroundColor: "#ef4444",
                color: "white",
                border: "none",
                padding: "6px 10px",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;
