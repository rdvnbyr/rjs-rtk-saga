import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    token: null,
    status: 'idle',
    error: null,
    loading: false,
  },
  reducers: {
    login: (state, action) => {
      state.status = 'loading';
    },
    loginSuccess: (state, action) => {
        console.log("loginSuccess", action)
      state.status = 'login-success';
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    loginFailure: (state, action) => {
      state.status = 'login-failure';
      state.error = action.payload.error;
    },

    ping: (state, action) => {
      state.status = 'loading';
    },
    pingSuccess: (state, action) => {
      state.status = 'success';
    },
    pingFailure: (state, action) => {
      state.status = 'failure';
      state.error = action.payload.error;
    },
    register: (state, action) => {
      state.status = 'loading';
    },
    registerSuccess: (state, action) => {
      state.status = 'register-success';
    },
    registerFailure: (state, action) => {
      state.status = 'register-failure';
      state.error = action.payload.error;
    },
  },
});

export const { login, loginFailure, loginSuccess } = authSlice.actions;

export const { ping, pingFailure, pingSuccess } = authSlice.actions;

export const { register, registerFailure, registerSuccess } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
