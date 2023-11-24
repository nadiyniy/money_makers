import { createSlice } from '@reduxjs/toolkit';
import { fetchTransactions, addTransaction } from './operations.js';

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
  extraReducers: {
    [fetchTransactions.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTransactions.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchTransactions.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [addTransaction.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    },
   
  },
});

export const transactionsReducer = transactionsSlice.reducer;
