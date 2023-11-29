import { createAsyncThunk } from '@reduxjs/toolkit';
import { Error } from 'components/svgs';
import { toast } from 'react-toastify';
import { clearToken, instance, setToken } from 'redux/fetchInstance';
import { currentInfoUserThunk } from 'redux/user/operations';

export const registerThunk = createAsyncThunk('register', async (user, thunkApi) => {
  try {
    const { data } = await instance.post('auth/register', user);

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk('login', async (user, thunkApi) => {
  try {
    const { data } = await instance.post('auth/login', user);
    setToken(data.accessToken);
    thunkApi.dispatch(currentInfoUserThunk());
    return data;
  } catch (error) {
    if (error.response.status === 403) {
      toast(<>{"Email doesn't exist or password is wrong"}</>, {
        className: 'Toastify__toast--error',
        icon: <Error />,
      });
    } else {
      toast(<>{'Something went wrong. Please try again!'}</>, {
        className: 'Toastify__toast--error',
        icon: <Error />,
      });
    }
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
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const savedTokenRefresh = thunkApi.getState().auth.refreshToken;
  const sid = thunkApi.getState().auth.sid;

  if (!savedTokenRefresh) {
    return thunkApi.rejectWithValue('Token does not exist');
  }
  try {
    setToken(savedTokenRefresh);
    const { data } = await instance.post('auth/refresh', { sid });
    setToken(data.accessToken);
    thunkApi.dispatch(currentInfoUserThunk());
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
