import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from 'redux/fetchInstance';

export const fetchTransactionsThunk = createAsyncThunk(
  'fetchTransactions',
  async ({ transactionType, date }, thunkApi) => {
    try {
      const savedToken = thunkApi.getState().auth.accessToken;
      const { data } = await instance.get(`transactions/${transactionType}?date=${date}`, {
        headers: {
          Authorization: `Bearer ${savedToken}`,
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const createUserTransactionThunk = createAsyncThunk(
  'createUserTransaction',
  async (userTransaction, thunkApi) => {
    try {
      const savedToken = thunkApi.getState().auth.accessToken;
      const { data } = await instance.post(`transactions`, userTransaction, {
        headers: {
          Authorization: `Bearer ${savedToken}`,
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeUserTransactionThunk = createAsyncThunk('removeUserTransaction', async (transactionId, thunkApi) => {
  try {
    const savedToken = thunkApi.getState().auth.accessToken;
    const { data } = await instance.delete(`transactions/${transactionId}`, {
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    });
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const updateUserTransactionThunk = createAsyncThunk(
  'updateTransaction',
  async ({ transactionId, transactionType }, thunkApi) => {
    try {
      const savedToken = thunkApi.getState().auth.accessToken;
      const { data } = await instance.patch(`transactions/${transactionType}/${transactionId}`, {
        headers: {
          Authorization: `Bearer ${savedToken}`,
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
