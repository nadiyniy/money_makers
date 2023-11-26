const { createSlice } = require('@reduxjs/toolkit');
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
      .addCase(logoutThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state = {
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
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(registerThunk.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      });
  },
});

export const authReducer = slice.reducer;
