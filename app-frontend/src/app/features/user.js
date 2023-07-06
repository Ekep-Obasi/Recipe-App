import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    register: (state, action) => {
      state.user = action.payload;
      state.token = action.accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
export const selectCurrentUser = (state) => state.user.user;
