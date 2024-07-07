import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=' pt-56 pl-10 absolute h-screen bg-gradient-to-r from-black text-white'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-sm font-mono w-4/12 my-5'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black px-5 py-2 rounded hover:bg-opacity-70'> ▶ Play</button>
        <button className='bg-gray-600 text-white px-5 py-2 rounded mx-3'> More info</button>
      </div>
    </div>
  )
}

export default VideoTitle