import Header from './Header'
import useFetchMovieUpdate from '../hooks/useFetchMovieUpdate';
import MainContainer from '../Components/MainContainer';
import MovieContainer from '../Components/MovieContainer';
import useFetchPopularUpdate from '../hooks/useFetchPopularUpdate';
import useFetchTopRatedMovieUpdate from '../hooks/useFetchTopRatedMovieUpdate';
import useFetchUpcomingUpdate from '../hooks/useFetchUpcomingUpdate';
import { useSelector } from 'react-redux';
import SearchContainer from '../Components/SearchContainer';

const Browse = () => {
  const search = useSelector((state) => state.search.searchPage);

  useFetchMovieUpdate();
  useFetchPopularUpdate();
  useFetchTopRatedMovieUpdate();
  useFetchUpcomingUpdate();

  return (
    <div>
      <Header />
      {
        search ? 
        <>
        <SearchContainer/>
        </> 
        : 
        <>
          <MainContainer />
          <MovieContainer />
        </>
      }
    </div>
  )
}

export default Browse