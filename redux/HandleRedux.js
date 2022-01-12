import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
    name: "handleActive",
    initialState: {
        idList: {},
    },
    reducers: {
        handleActive: (state, id) => {
            state.idList[id.payload] = id.payload;
        },

        RemoveId: (state, id) => {
            delete state.idList[id.payload];
        }


    }

});


export const { handleActive, RemoveId } = activeSlice.actions;
export default activeSlice.reducer; 