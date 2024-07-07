import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState:{
        movieslist:null,
        popularmovieslist:null,
        topRatedmovieslist:null,
        upcomingmovieslist:null
    },
    reducers:{
        setMovies:(state,action) => {
            state.movieslist = action.payload;
        },
        setPopular:(state, action) => {
            state.popularmovieslist = action.payload;
        },
        setTopRated:(state, action) => {
            state.topRatedmovieslist = action.payload;
        },
        setUpcoming:(state, action) => {
            state.upcomingmovieslist = action.payload;
        }
    }
})

export const {setMovies, setPopular,setTopRated, setUpcoming} = movieSlice.actions;
export default movieSlice.reducer;