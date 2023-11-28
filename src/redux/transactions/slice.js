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
  transactions: [
    {
      _id: '6529eff94ceb918e15a171f1',
      type: 'expenses',
      date: '2022-12-28',
      time: '09:43',
      category: {
        _id: '6522bf1f9027bb7d55d6js73',
        categoryName: 'Groseries',
      },
      sum: 700,
      comment: 'Supermarket purchase',
    },

    {
      _id: '6529eff94ceb918e15kaj9n4',
      type: 'incomes',
      date: '2022-12-28',
      time: '19:45',
      category: {
        _id: '6522bf1f9027bb7d55d6512b',
        categoryName: 'Salary',
      },
      sum: 2500,
      comment: 'December salary',
    },
    {
      _id: '6529eff94ceb918e15a1h39d',
      type: 'expenses',
      date: '2022-09-20',
      time: '12:06',
      category: {
        _id: '6522bf1f9027bb7d55d6js73',
        categoryName: 'Groseries',
      },
      sum: 400,
      comment: 'Flowers for wife',
    },
    {
      _id: '6529eff94ceb918e15l3mb57',
      type: 'incomes',
      date: '2023-01-25',
      time: '20:00',
      category: {
        _id: '6522bf1f9027bb7d55d6512b',
        categoryName: 'Salary',
      },
      sum: 2700,
      comment: 'January salary',
    },
    {
      _id: '6529eff94ceb918e15j38dj6',
      type: 'incomes',
      date: '2023-02-01',
      time: '07:15',
      category: {
        _id: '6522bf1f9027bb7d55d6512b',
        categoryName: 'Salary',
      },
      sum: 1000,
      comment: 'Premia',
    },
    {
      _id: '6529eff94ceb918e15m48m23',
      type: 'expenses',
      date: '2022-12-28',
      time: '19:45',
      category: {
        _id: '6522bf1f9027bb7d55d6512b',
        categoryName: 'Salary',
      },
      sum: 700,
      comment: 'December salary',
    },
    {
      _id: '6529eff94ceb918e15l398sk4',
      type: 'incomes',
      date: '2023-02-28',
      time: '19:00',
      category: {
        _id: '6522bf1f9027bb7d55d6512b',
        categoryName: 'Salary',
      },
      sum: 2000,
      comment: 'February salary',
    },
  ],
  isLoading: false,
  error: null,
  inputDate: { year, month, day },
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setInputDate: (state, { payload }) => {
      state.inputDate = payload;
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


export const { setInputDate } = transactionsSlice.actions;

export const transactionsReducer = transactionsSlice.reducer;
