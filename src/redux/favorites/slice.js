import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'favorites',
  initialState: { ids: [] },
  reducers: {
    addToFavorites: (state, action) => {
      state.ids.push(action.payload);
    },
    deleteFromFavorites: (state, action) => {
      state.ids = state.ids.filter(id => id !== action.payload);
    },
  },
});

export const { addToFavorites, deleteFromFavorites } = slice.actions;
export default slice.reducer;
