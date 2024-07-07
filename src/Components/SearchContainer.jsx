import React from 'react'
import SearchBar from '../Components/SearchBar'
import SearchPage from '../Components/SearchPage'
import { BG_IMAGE } from '../utils/constants'

const SearchContainer = () => {
  return (
    <div>
        <SearchBar/>
        <SearchPage/>
        <div className=''>
        <img className=' absolute left-0 top-0 -z-10' src={BG_IMAGE} alt='bg-image'/>
        </div>
    </div>
  )
}

export default SearchContainer