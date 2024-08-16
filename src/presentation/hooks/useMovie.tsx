import { useEffect, useState } from 'react'
import * as UseCases from "../../core/use-cases";
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';
import { Video } from '../../core/entities/video.entity';

export const useMovie = (movieId: number) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ movie, setMovie ] = useState<FullMovie>();
  const [ cast, setCast ] = useState<Cast[]>();
  const [ video, setVideo ] = useState<Video[]>();

  useEffect(() => {
    loadMovie();
  }, [ movieId ])

  const loadMovie = async () => {
    setIsLoading(true);

    const fullMoviePromise = UseCases.getMovieByIdUseCase(movieDBFetcher, movieId);
    const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId);
    const videoPromise = UseCases.getMovieVideoUseCase(movieDBFetcher, movieId);

    const [ fullMovie, cast, video ] = await Promise.all([
      fullMoviePromise,
      castPromise,
      videoPromise
    ]);

    setMovie(fullMovie);
    setCast(cast);
    setVideo(video);

    setIsLoading(false);
  }

  return {
    isLoading,
    movie,
    cast,
    video,
  }
}