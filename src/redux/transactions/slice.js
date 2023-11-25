import { createSlice } from '@reduxjs/toolkit';
import { fetchTransactions } from './operations.js';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchTransactions.fulfilled, (state, { payload }) => {
          state.items = payload;
          state.isLoading = false;
        })
  },
});

export const transactionsReducer = transactionsSlice.reducer;
