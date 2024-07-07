import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../utils/userSlice';
import movieSlice from '../utils/movieSlice';
import searchSlice from '../utils/searchSlice';
import configSlice from "../utils/configSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    movies:movieSlice,
    search:searchSlice,
    config:configSlice,
  },
})