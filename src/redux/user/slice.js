import { createSlice } from '@reduxjs/toolkit';
import { fetchThunk, updateThunk, deleteThunk } from './operations.js';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateThunk.fulfilled, (state, action) => {
        state.data = { ...state.data, ...action.payload };
      })
      .addCase(deleteThunk.fulfilled, state => {
        state.data = null;
      });
  },
});

export const userReducer = userSlice.reducer;