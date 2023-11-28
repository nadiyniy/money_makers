import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken } from '../fetchInstance';

export const addedCategoryThunk = createAsyncThunk('addedCategory', async (body, thunkApi) => {
  try {
    const savedToken = thunkApi.getState().auth.accessToken;
    const { data } = await instance.post('categories/', body, {
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    });

    setToken(data.accessToken);

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteCategoryThunk = createAsyncThunk('deleteCategoryById', async (id, thunkApi) => {
  try {
    const savedToken = thunkApi.getState().auth.accessToken;
    const { data } = await instance.delete(`categories/${id}`, {
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    });
    setToken(data.accessToken);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const updateCategoryThunk = createAsyncThunk('updateCategoryById', async ({ _id, categoryName }, thunkApi) => {
  try {
    const savedToken = thunkApi.getState().auth.accessToken;

    const { data } = await instance.patch(`categories/${_id}`, categoryName, {
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    });
    setToken(data.accessToken);

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const fetchCategoriesThunk = createAsyncThunk('fetchAllCategories', async (_, thunkApi) => {
  try {
    const savedToken = thunkApi.getState().auth.accessToken;
    const { data } = await instance.get('categories', {
      headers: {
        Authorization: `Bearer ${savedToken}`,
      },
    });
    setToken(data.accessToken);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
