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
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.error = null;
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
      })
      .addMatcher(isAnyOf(registerThunk.pending, loginThunk.pending, logoutThunk.pending), (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(registerThunk.rejected, loginThunk.rejected, logoutThunk.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = slice.reducer;
