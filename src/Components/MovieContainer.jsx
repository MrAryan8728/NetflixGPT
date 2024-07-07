import React from 'react'
import MovieList from '../Components/MovieList'
import { useSelector } from 'react-redux'

const MovieContainer = () => {
  const movies = useSelector((state) => state.movies.movieslist);
  const popularMovies = useSelector((state) => state.movies.popularmovieslist);
  const topRated = useSelector((state) => state.movies.topRatedmovieslist);
  const upComing = useSelector((state) => state.movies.upcomingmovieslist)
  if(!movies || !popularMovies || !topRated || !upComing) return;
  return (
    <div className=' bg-black'>
    <div className=' relative -mt-44 pl-10 flex flex-col gap-6'>
      <MovieList title={"Now Playing"} movies = {movies}/>
      <MovieList title={"Popular"} movies = {popularMovies}/>
      <MovieList title={"TopRated"} movies = {topRated}/>
      <MovieList title={"Upcoming"} movies = {upComing}/>
    </div>
    </div>
  )
}

export default MovieContainer