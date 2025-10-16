import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [
    { id: 1, name: 'Wheel Alignment' },
    { id: 2, name: 'Tyre Balancing' },
  ],
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    addService: (state, action) => {
      state.services.push(action.payload);
    },
    removeService: (state, action) => {
      state.services = state.services.filter(s => s.id !== action.payload);
    },
  },
});

export const { addService, removeService } = servicesSlice.actions;
export default servicesSlice.reducer;
