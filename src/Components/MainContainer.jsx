import React from 'react'
import VideoTitle from '../Components/VideoTitle'
import VideoTrailer from '../Components/VideoTrailer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((state) => state.movies.movieslist);

    if(!movies) return;

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} overview = {overview} />
            <VideoTrailer id = {id} />
        </div>
    )
}

export default MainContainer