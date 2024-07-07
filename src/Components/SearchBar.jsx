import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import language from '../utils/language';
import model from '../utils/openAI';
import { setSearch } from '../utils/searchSlice';
import { options } from '../utils/constants';


const SearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((state) => state.config.language);
  const searchText = useRef(null);

  const searchMovie = async (name) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + name, options);
    const json = await data.json();
    return json.results;
  }

  const handleSearch = async () => {
    //Ab search ka data aa gya hai.

    if (searchText.current.value === null) return;

    //Ab call krte hain Gemini ko.
    const query = "Please provide the names of 5 movies that fit the following criteria: " +
      searchText.current.value + " The movie names should be comma-separated. For example: Shaun of the Dead, Tucker and Dale vs. Evil, The Cabin in the Woods, What We Do in the Shadows, Evil Dead II";

    const result = await model.generateContent(query);
    const response = await result.response;
    const text = response.text();
    // list "x", 'y".... "z".
    const list = text.split(",");

    const data = list.map(movie => searchMovie(movie));
    //[promise1, promise2, promise3, promise4, promise5];

    const TMDB_results = await Promise.all(data);
    // console.log(TMDB_results);
    dispatch(setSearch({ movieResults: TMDB_results, movieName: list }));
  }

  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center'>
      <form
        className='grid grid-cols-6 px-1 md:grid-cols-12'
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className=' col-span-5 md:col-span-10 px-6 py-2 rounded ' placeholder={language[langKey].placeholder} />
        <button
          onClick={() => handleSearch()}
          className=' font-semibold col-span-1 md:col-span-2 px-6 py-2 bg-red-700 text-white rounded '>
          {language[langKey].btn}
        </button>
      </form>
    </div>
  )
}

export default SearchBar;