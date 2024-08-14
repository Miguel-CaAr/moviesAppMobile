import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { TopRaterResponse } from '../../../infrastructure/interfaces/movie-db-responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const moviesTopRaterUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const topRater = await fetcher.get<TopRaterResponse>('/top_rated');

    return topRater.results.map(result => MovieMapper.fromMovieDBResultToEntity(result));
  } catch (error) {
    console.log('🤖 ~ file: top-rater.use-case.ts:13 ~ moviesTopRaterUseCase ~ error:', error);
    throw Error('Error fetching movies - moviesTopRaterUseCase');
  }
};
