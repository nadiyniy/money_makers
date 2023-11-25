import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { currentInfoUserThunk, deleteAvatarThunk, updateAvatarThunk, updateInfoUserThunk } from './operations';

const initialState = {
  user: {},
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(currentInfoUserThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        console.log(1, payload);
      })
      .addCase(updateInfoUserThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
      })
      .addCase(updateAvatarThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user.avatar = payload;
      })
      .addCase(deleteAvatarThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user.avatar = payload;
      })
      .addMatcher(
        isAnyOf(
          currentInfoUserThunk.pending,
          updateInfoUserThunk.pending,
          updateAvatarThunk.pending,
          deleteAvatarThunk.pending
        ),
        (state, { payload }) => {
          state.loading = true;
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
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const userReducer = userSlice.reducer;
