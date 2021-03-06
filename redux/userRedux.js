import { createSlice } from "@reduxjs/toolkit";

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
        },
        requesting: (state) => {
            state.isFetching = true;
        },
        endRequest: (state) => {
            state.isFetching = false;
        }
    },
});

export const { loginStart, loginSuccess, loginFailure, loginOut, requesting, endRequest} = userSlice.actions;
export default userSlice.reducer;