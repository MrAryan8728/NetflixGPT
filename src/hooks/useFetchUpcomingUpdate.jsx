import { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setUpcoming } from '../utils/movieSlice'

const useFetchUpcomingUpdate = () => {
    const upcomingmovieslist = useSelector(store => store.movies.upcomingmovieslist);

    const dispatch = useDispatch();

    const fetchMovieList = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options)
        const json = await data.json();
        dispatch(setUpcoming(json.results));
    }

    useEffect(() => {
        !upcomingmovieslist && fetchMovieList();
    }, [])
}

export default useFetchUpcomingUpdate;