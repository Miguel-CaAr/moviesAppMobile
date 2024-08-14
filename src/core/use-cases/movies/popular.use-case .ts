import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { PopularResponse } from '../../../infrastructure/interfaces/movie-db-responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<PopularResponse>('/popular', {
      params: {
        page: options?.page ?? 1,
      }
    });

    return popular.results.map(result => MovieMapper.fromMovieDBResultToEntity(result));
  } catch (error) {
    console.log('🤖 ~ file: popular.use-case .ts:13 ~ moviesPopularUseCase ~ error:', error);
    throw Error('Error fetching movies - moviesPopularUseCase');
  }
};
