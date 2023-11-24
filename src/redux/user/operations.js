import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/fetchInstance';

export const fetchThunk = createAsyncThunk('user/fetchUser', async (userId, thunkApi) => {
  try {
    const response = await instance.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const updateThunk = createAsyncThunk('user/updateUser', async ({ userId, userData }, thunkApi) => {
  try {
    const response = await instance.put(`/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteThunk = createAsyncThunk('user/deleteUser', async (userId, thunkApi) => {
  try {
    await instance.delete(`/users/${userId}`);
    return userId;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});