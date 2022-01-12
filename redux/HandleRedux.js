import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
    name: "handleActive",
    initialState: {
        idList: undefined,
    },
    reducers: {
        handleActive: (state, id) => {
            if (state.idList === undefined) {
                state.idList = {};
            }
            state.idList[id.payload] = id.payload;
        },

        RemoveId: (state, id) => {
            delete state.idList[id.payload];
        }


    }

});


export const { handleActive, RemoveId } = activeSlice.actions;
export default activeSlice.reducer; 