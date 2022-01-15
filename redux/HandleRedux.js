import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
    name: "handleActive",
    initialState: {
        idList: undefined,
        SectId: undefined,
        activeId: undefined,
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
        },
        // Active page Reducers
        SafeActiveId: (state, id) => {
            state.activeId = id.payload;
        },
        SafeSectId: (state, id) => {
            state.SectId = id.payload;
        },


    }

});


export const { handleActive, RemoveId, SafeActiveId, SafeSectId } = activeSlice.actions;
export default activeSlice.reducer; 