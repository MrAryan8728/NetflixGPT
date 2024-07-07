import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../Components/MovieList'

const SearchPage = () => {
  const {searchNames, searchResult} = useSelector(store => store.search);

  if(!searchNames) return null;
  return (
    <div className=' p-4 m-4 bg-black bg-opacity-80 text-white'>
    {
      searchNames.map((val, index) =>
        <MovieList title={searchNames[index]} movies={searchResult[index]}/> 
      )
    }
    </div>
  )
}

export default SearchPage