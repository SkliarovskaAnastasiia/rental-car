import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async (params, thunkAPI) => {
    try {
      const response = await api.get('/cars', { params });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
