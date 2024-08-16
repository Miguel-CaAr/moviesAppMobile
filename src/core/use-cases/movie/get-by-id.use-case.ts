import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { FullMovie } from '../../../core/entities/movie.entity';
import { MovieDBMovie } from '../../../infrastructure/interfaces/movie-db-responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number
): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<MovieDBMovie>(`${movieId}`);

    const fullMovie = MovieMapper.fromMovieDBToEntity(movie);

    return fullMovie;
  } catch (error) {
    console.log('🤖 ~ file: get-by-id.use-case.ts:18 ~ error:', error);
    throw new Error(`Cannot get movie by id ${movieId}`);
  };
};