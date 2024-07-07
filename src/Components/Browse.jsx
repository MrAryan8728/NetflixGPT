import Header from './Header'
import useFetchMovieUpdate from '../hooks/useFetchMovieUpdate';
import MainContainer from '../Components/MainContainer';
import MovieContainer from '../Components/MovieContainer';
import useFetchPopularUpdate from '../hooks/useFetchPopularUpdate';
import useFetchTopRatedMovieUpdate from '../hooks/useFetchTopRatedMovieUpdate';
import useFetchUpcomingUpdate from '../hooks/useFetchUpcomingUpdate';

const Browse = () => {
 
  useFetchMovieUpdate();
  useFetchPopularUpdate();
  useFetchTopRatedMovieUpdate();
  useFetchUpcomingUpdate();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <MovieContainer/>
    </div>
  )
}

export default Browse