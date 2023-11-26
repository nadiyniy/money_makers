import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken } from '../fetchInstance';

export const addedCategoryThunk = createAsyncThunk('addedCategory', async (body, thunkApi) => {
  try {
    const { data } = await instance.post('categories/', body);
    setToken(data.accessToken);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteCategoryThunk = createAsyncThunk('deleteCategoryById', async (id, thunkApi) => {
  try {
    const { data } = await instance.delete(`categories/${id}`);
    setToken(data.accessToken);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const updateCategoryThunk = createAsyncThunk('updateCategoryById', async (body, thunkApi) => {
  try {
    const { data } = await instance.patch(`categories/${body.id}`);
    setToken(data.accessToken);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const fetchCategoriesThunk = createAsyncThunk('fetchAllCategories', async (_, thunkApi) => {
  try {
    const { data } = await instance.get('categories');
    setToken(data.accessToken);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
