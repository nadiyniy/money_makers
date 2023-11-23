const { createSlice } = require('@reduxjs/toolkit');
const { registerThunk } = require('./operations');

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
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.accessToken = payload.accessToken;
      state.isLoggedIn = true;
      state.error = '';
    });
    // .addCase();
  },
});

export const authReducer = slice.reducer;
