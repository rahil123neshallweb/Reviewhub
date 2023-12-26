// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const darkmodeSlice = createSlice({
    name: 'darkmode',
    initialState: {
        isDarkmode: false,
    },
    reducers: {
        darkmode: (state) => {state.isDarkmode = true},
        lightmode: (state) => {state.isDarkmode = false},
    },
});

export const { darkmode, lightmode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
