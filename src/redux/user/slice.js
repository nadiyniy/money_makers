import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, updateUser, deleteUser } from './userThunkActions';

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
      .addCase(fetchUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.data = { ...state.data, ...action.payload };
      })
      .addCase(deleteUser.fulfilled, state => {
        state.data = null;
      });
  },
});

export const userReducer = userSlice.reducer;