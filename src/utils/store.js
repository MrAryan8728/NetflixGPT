import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../utils/userSlice';
import movieSlice from '../utils/movieSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies:movieSlice
  },
})