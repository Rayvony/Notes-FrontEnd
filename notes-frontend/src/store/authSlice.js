import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", // "not-authenticated"|"authenticated"
    user: {},
  },

  reducers: {
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
    },

    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {};
    },
  },
});

export const { onLogin, onLogout } = authSlice.actions;
