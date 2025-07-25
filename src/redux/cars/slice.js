import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operations';

const slice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    totalPages: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCars.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.data.push(...action.payload.cars);
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.totalPages = null;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
