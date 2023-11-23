import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, instance, setToken } from 'redux/fetchInstance';

export const registerThunk = createAsyncThunk('register', async (credential, thunkApi) => {
  try {
    const { data } = await instance.post('auth/signup', credential);
    setToken(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk('login', async (credential, thunkApi) => {
  try {
    const { data } = await instance.post('auth/login', credential);
    setToken(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    instance.post('auth/logout');
    clearToken();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token;

  if (!savedToken) {
    return thunkApi.rejectWithValue('Token is not exist');
  }
  try {
    setToken(savedToken);
    const { data } = await instance.get('auth/refresh');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
