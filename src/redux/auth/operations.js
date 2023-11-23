import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken } from 'redux/fetchInstance';

export const registerThunk = createAsyncThunk('register', async (credential, thunkApi) => {
  try {
    const { data } = await instance.post('auth/register', credential);
    setToken(data.accessToken);
    console.log(data);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
