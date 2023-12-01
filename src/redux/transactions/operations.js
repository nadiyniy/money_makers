import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from 'redux/fetchInstance';
import { currentInfoUserThunk } from 'redux/user/operations';

export const fetchTransactionsThunk = createAsyncThunk('getTransactions', async ({ type, date }, thunkApi) => {
  try {
    const { data } = await instance.get(`transactions/${type}`, {
      params: { date },
    });
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

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
      thunkApi.dispatch(currentInfoUserThunk());
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

export const updateUserTransactionThunk = createAsyncThunk('updateTransaction', async (transaction, thunkApi) => {
  try {
    const savedToken = thunkApi.getState().auth.accessToken;

    const transactionId = transaction._id;
    const transactionType = transaction.type;
    transaction._id = undefined;
    transaction.type = undefined;

    console.log(transaction);
    const { data } = await instance.patch(`transactions/${transactionType}/${transactionId}`, transaction, {
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    });
    thunkApi.dispatch(currentInfoUserThunk());
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
