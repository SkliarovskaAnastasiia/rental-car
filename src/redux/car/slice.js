import { createSlice } from '@reduxjs/toolkit';
import { getCarById } from './operations';

const slice = createSlice({
  name: 'oneCar',
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getCarById.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getCarById.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default slice.reducer;
