import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};
