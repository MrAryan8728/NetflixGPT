import React, { useEffect, useState } from 'react'
import { options } from '../utils/constants'

const VideoTrailer = ({ id }) => {

  const [videoKey, setVideoKey] = useState();

  const fetchVideoTrailer = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?', options);
    const json = await data.json();
    const filteredData = json.results.filter((val) => val.type === "Trailer");

    const ytVideo = filteredData[0];
    setVideoKey(ytVideo?.key)
  }

  useEffect(() => {
    fetchVideoTrailer();
  }, [])

  return (
    <div className=''>
      <iframe
        className='w-[100%] h-screen'
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1&playlist=${videoKey}&controls=0&modestbranding=1&showinfo=0&rel=0&fs=1`}
        title="YouTube video player"
        allow="autoplay; fullscreen">
      </iframe>

    </div>
  )
}

export default VideoTrailer