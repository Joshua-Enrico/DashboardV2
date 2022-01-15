import { createSlice } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "../styles/Theme";


const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: null,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            console.log(action)
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        loginOut: (state) => {
            state.currentUser = null;
            state.isFetching = false;
        }
    },
});

export const { loginStart, loginSuccess, loginFailure, loginOut } = userSlice.actions;
export default userSlice.reducer;