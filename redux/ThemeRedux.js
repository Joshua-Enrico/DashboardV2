import { createSlice } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "../styles/Theme";


const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: lightTheme,
        light: true
    },
    reducers: {
        SwitchTheme: (state) => {
            if(state.light === false){
                state.theme = darkTheme;
                state.light = true;
            } else {
                state.theme = lightTheme;
                state.light = false;
            }
        },
    },
});

export const { SwitchTheme } = themeSlice.actions;
export default themeSlice.reducer; 