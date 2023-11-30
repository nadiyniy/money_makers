import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createUserTransactionThunk,
  fetchTransactionsThunk,
  removeUserTransactionThunk,
  updateUserTransactionThunk,
} from './operations.js';
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

const initialState = {
  transactions: [],
  isLoading: false,
  error: null,
  inputDate: { year, month, day },
  filter: '',
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setInputDate: (state, { payload }) => {
      state.inputDate = payload;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTransactionsThunk.fulfilled, (state, { payload }) => {
        state.transactions = payload;
        state.isLoading = false;
      })
      .addCase(createUserTransactionThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.transactions.push(payload);
      })
      .addCase(removeUserTransactionThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.transactions = state.transactions.filter(transaction => transaction._id !== payload);
      })
      .addCase(updateUserTransactionThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const updatedIndex = state.transactions.findIndex(transaction => transaction._id === payload._id);
        if (updatedIndex !== -1) {
          state.transactions[updatedIndex] = payload;
        }
      })
      .addMatcher(
        isAnyOf(
          fetchTransactionsThunk.pending,
          createUserTransactionThunk.pending,
          removeUserTransactionThunk.pending,
          removeUserTransactionThunk.pending
        ),
        (state, { payload }) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTransactionsThunk.rejected,
          createUserTransactionThunk.rejected,
          removeUserTransactionThunk.rejected,
          removeUserTransactionThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { setInputDate, setFilter } = transactionsSlice.actions;

export const transactionsReducer = transactionsSlice.reducer;
