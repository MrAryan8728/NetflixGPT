import React from 'react'
import {IMG_URI} from '../utils/constants';

const MovieCard = ({imgURI}) => {
  if(!imgURI) return;
  return (
    <div className='w-40 md:w-44'>
        <img alt='movie-Card-Img' src={IMG_URI + imgURI} />
    </div>
  )
}

export default MovieCard