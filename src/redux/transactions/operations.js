import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/fetchInstance'; 

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (userId, thunkApi) => {
    try {
      const response = await instance.get(`/transactions/${userId}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transactionData, thunkApi) => {
    try {
      const response = await instance.post('/transactions', transactionData);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


