import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState:{
        movieslist:null
    },
    reducers:{
        setMovies:(state,action) => {
            state.movieslist = action.payload;
        }
    }
})

export const {setMovies} = movieSlice.actions;
export default movieSlice.reducer;