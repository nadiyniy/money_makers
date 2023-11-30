import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { currentInfoUserThunk, deleteAvatarThunk, updateAvatarThunk, updateInfoUserThunk } from './operations';

const initialState = {
  user: {},
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(currentInfoUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(updateInfoUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.name = payload.name;
        state.user.currency = payload.currency;
      })
      .addCase(updateAvatarThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.avatarUrl = payload.avatarUrl;
      })
      .addCase(deleteAvatarThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.avatarUrl = null;
      })
      .addMatcher(
        isAnyOf(
          currentInfoUserThunk.pending,
          // updateInfoUserThunk.pending,
          updateAvatarThunk.pending,
          deleteAvatarThunk.pending
        ),
        (state, { payload }) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          currentInfoUserThunk.rejected,
          updateInfoUserThunk.rejected,
          updateAvatarThunk.rejected,
          deleteAvatarThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const userReducer = userSlice.reducer;
