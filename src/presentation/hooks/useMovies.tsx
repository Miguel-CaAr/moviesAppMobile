import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

let popularPageNumber = 1;

export const useMovies = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ nowPlaying, setNotPlaying ] = useState<Movie[]>([]);
  const [ popular, setPopular ] = useState<Movie[]>([]);
  const [ topRater, setTopRater ] = useState<Movie[]>([]);
  const [ upcoming, setUpcoming ] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);
    const topRaterPromise = UseCases.moviesTopRaterUseCase(movieDBFetcher);
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);

    const [ nowPlayingMovies, popularMovies, topRaterMovies, upcomingMovies ] = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRaterPromise,
      upcomingPromise,
    ]);

    setNotPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRater(topRaterMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);
  };
  return {
    isLoading,
    nowPlaying,
    popular,
    topRater,
    upcoming,

    //Methods
    popularNextPage: async () => {
      popularPageNumber++;
      const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
        page: popularPageNumber,
      });

      setPopular(prev => [ ...prev, ...popularMovies ]);
    }
  };
};
