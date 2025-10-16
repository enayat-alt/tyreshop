import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from '../features/servicesSlice';
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    auth: authReducer,
  },
});
