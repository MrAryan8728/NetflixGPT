import { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setPopular } from '../utils/movieSlice'

const useFetchPopularUpdate = () => {
    const popularmovieslist = useSelector(store => store.movies.popularmovieslist); 

    const dispatch = useDispatch();

    const fetchMovieList = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options)
        const json = await data.json();
        dispatch(setPopular(json.results));
    }

    useEffect(() => {
        !popularmovieslist && fetchMovieList();
    }, [])
}

export default useFetchPopularUpdate;