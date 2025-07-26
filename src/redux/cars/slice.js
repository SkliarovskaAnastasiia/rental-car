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
  reducers: {
    resetCars: state => {
      state.data = [];
      state.totalPages = null;
    },
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
        state.error = action.payload;
      });
  },
});

export const { resetCars } = slice.actions;
export default slice.reducer;
