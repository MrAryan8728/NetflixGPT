import { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setTopRated } from '../utils/movieSlice'

const useFetchTopRatedMovieUpdate = () => {
    const topRatedmovieslist = useSelector(store => store.movies.topRatedmovieslist);

    const dispatch = useDispatch();

    const fetchMovieList = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options)
        const json = await data.json();
        dispatch(setTopRated(json.results));
    }

    useEffect(() => {
        !topRatedmovieslist && fetchMovieList();
    }, [])
}

export default useFetchTopRatedMovieUpdate;