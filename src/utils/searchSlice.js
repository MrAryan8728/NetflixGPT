import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        searchPage:false
    },
    reducers:{
        toggleSearch:(state) => {
            state.searchPage = !state.searchPage;
        }
    }
})

export const {toggleSearch} = searchSlice.actions;
export default searchSlice.reducer;