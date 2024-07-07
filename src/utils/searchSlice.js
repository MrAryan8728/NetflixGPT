import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        searchPage:false,
        searchResult:null,
        searchNames: null
    },
    reducers:{
        toggleSearch:(state) => {
            state.searchPage = !state.searchPage;
        },
        setSearch:(state, action) => {
            const {movieResults, movieName} = action.payload;
            state.searchResult = movieResults;
            state.searchNames = movieName;
        }
    }
})

export const {toggleSearch, setSearch} = searchSlice.actions;
export default searchSlice.reducer;