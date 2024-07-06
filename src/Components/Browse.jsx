import Header from './Header'
import useFetchMovieUpdate from '../hooks/useFetchMovieUpdate';
import MainContainer from '../Components/MainContainer';
import MovieContainer from '../Components/MovieContainer';

const Browse = () => {
 
  useFetchMovieUpdate();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <MovieContainer/>
    </div>
  )
}

export default Browse