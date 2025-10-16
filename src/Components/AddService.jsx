
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addService } from '../features/servicesSlice';
import { PlusCircle } from 'lucide-react';
import ServicesList from './ServicesList';
import './AddService.css';

const AddService = () => {
  const [serviceName, setServiceName] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (serviceName.trim()) {
      dispatch(addService({ id: Date.now(), name: serviceName }));
      setServiceName('');
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", fontFamily: "Arial, sans-serif" }}>
      {/* Add Service Form */}
      <div className="add-service-container" style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Enter new service"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          className="add-service-input"
        />
        <button onClick={handleAdd} className="add-service-button">
          <PlusCircle size={18} />
          Add Service
        </button>
      </div>

      {/* Services List below the form */}
      <ServicesList />
    </div>
  );
};

export default AddService;
