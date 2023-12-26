// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticate: false,
    },
    reducers: {
        login: (state) => {state.isAuthenticate = true},
        logout: (state) => {state.isAuthenticate = false},
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
