import React from 'react'
import {IMG_URI} from '../utils/constants';

const MovieCard = ({imgURI}) => {
  return (
    <div className='w-44'>
        <img alt='movie-Card-Img' src={IMG_URI + imgURI} />
    </div>
  )
}

export default MovieCard