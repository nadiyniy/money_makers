const { createSlice } = require('@reduxjs/toolkit');
const { registerThunk } = require('./operations');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  error: null,
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = '';
    });
  },
});

export const authReducer = slice.reducer;
