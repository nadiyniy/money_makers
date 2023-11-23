import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, instance, setToken } from 'redux/fetchInstance';

export const registerThunk = createAsyncThunk('register', async (user, thunkApi) => {
  try {
    const { data } = await instance.post('auth/register', user);
    setToken(data.accessToken);
    console.log(data);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk('login', async (user, thunkApi) => {
  try {
    const { data } = await instance.post('auth/login', user);
    setToken(data.accessToken);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    const savedToken = thunkApi.getState().auth.accessToken;

    if (!savedToken) {
      throw new Error('Token does not exist');
    }
    setToken(savedToken);
    await instance.get('/auth/logout');
    clearToken();
  } catch (error) {
    console.log({ error });

    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk('auth/refresh', async (sid, thunkApi) => {
  const savedToken = thunkApi.getState().auth.accessToken;

  if (!savedToken) {
    throw new Error('Token does not exist');
  }
  try {
    setToken(savedToken);
    const { data } = await instance.post('auth/refresh', sid);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
