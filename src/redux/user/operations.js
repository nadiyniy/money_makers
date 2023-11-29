import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/fetchInstance';

export const currentInfoUserThunk = createAsyncThunk('currentInfoUser', async (_, thunkApi) => {
  try {
    const { data } = await instance.get('users/current');
    thunkApi.dispatch(currentInfoUserThunk());
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const updateInfoUserThunk = createAsyncThunk('updateInfoUser', async (userData, thunkApi) => {
  try {
    const savedToken = thunkApi.getState().auth.accessToken;

    const { data } = await instance.patch('users/info', userData, {
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    });
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const updateAvatarThunk = createAsyncThunk('updateAvatar', async (avatarFile, thunkApi) => {
  try {
    const formData = new FormData();
    formData.append('avatar', avatarFile);
    const savedToken = thunkApi.getState().auth.accessToken;

    const { data } = await instance.patch('users/avatar', formData, {
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    });

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteAvatarThunk = createAsyncThunk('deleteAvatar', async (avatarId, thunkApi) => {
  try {
    const savedToken = thunkApi.getState().auth.accessToken;
    const { data } = await instance.delete(`users/avatar/${avatarId}`, {
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    });

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
