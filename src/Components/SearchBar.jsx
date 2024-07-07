import React from 'react'
import { useSelector } from 'react-redux'
import language from '../utils/language';

const SearchBar = () => {
  const langKey = useSelector((state) => state.config.language);
  return (
    <div className=' pt-[10%] flex justify-center'>
      <form className='grid grid-cols-12'>
        <input className=' col-span-10 px-6 py-2 rounded ' placeholder={language[langKey].placeholder}/>
        <button className=' font-semibold col-span-2 px-6 py-2 bg-red-700 text-white rounded '>{language[langKey].btn}</button>
      </form>
    </div>
  )
}

export default SearchBar