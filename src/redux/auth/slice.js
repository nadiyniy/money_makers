const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const { registerThunk, loginThunk, logoutThunk, refreshThunk } = require('./operations');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  accessToken: '',
  refreshToken: '',
  sid: '',
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, state => {
        return (state = initialState);
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addMatcher(isAnyOf(logoutThunk.fulfilled, refreshThunk.fulfilled), (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.accessToken = payload.accessToken;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(logoutThunk.rejected, refreshThunk.rejected), (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addMatcher(isAnyOf(registerThunk.rejected, loginThunk.rejected), (state, { payload }) => {
        state.error = payload;
      })
      .addMatcher(isAnyOf(registerThunk.pending, loginThunk.pending, logoutThunk.pending), (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      });
  },
});

export const authReducer = slice.reducer;
