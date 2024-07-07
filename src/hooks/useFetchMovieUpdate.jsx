import { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setMovies } from '../utils/movieSlice'

const useFetchMovieUpdate = () => {
    const movieslist = useSelector(store => store.movies.movieslist);

    const dispatch = useDispatch();

    const fetchMovieList = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
        const json = await data.json();
        dispatch(setMovies(json.results));
    }

    useEffect(() => {
        !movieslist && fetchMovieList();
    }, [])
}

export default useFetchMovieUpdate;