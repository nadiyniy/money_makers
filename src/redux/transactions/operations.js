import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from 'redux/fetchInstance';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (type, thunkApi) => {
    try {
      const data = await instance.get(`transactions/${type}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);




