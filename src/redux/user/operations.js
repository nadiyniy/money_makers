import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/fetchInstance';

export const currentInfoUserThunk = createAsyncThunk('currentInfoUser', async (_, thunkApi) => {
  try {
    const { data } = await instance.get('users/current');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const updateInfoUserThunk = createAsyncThunk('updateInfoUser', async (userData, thunkApi) => {
  try {
    const { data } = await instance.patch('users/info', userData);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const updateAvatarThunk = createAsyncThunk('updateAvatar', async (avatarFile, thunkApi) => {
  try {
    const formData = new FormData();
    formData.append('avatar', avatarFile);

    const { data } = await instance.patch('users/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteAvatarThunk = createAsyncThunk('deleteAvatar', async (avatarId, thunkApi) => {
  try {
    const { data } = await instance.delete(`users/avatar/${avatarId}`);

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
