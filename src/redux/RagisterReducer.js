import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'ragister',
  initialState: {
    users: [],
    currentUser: null,
  },
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
      console.log("Ragister User", action.payload);
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find((user) => user.email === email && user.password === password);
      if (user) {
        state.currentUser = user;
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
