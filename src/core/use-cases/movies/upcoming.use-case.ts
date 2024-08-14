import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { UpcomingResponse } from '../../../infrastructure/interfaces/movie-db-responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<UpcomingResponse>('/upcoming');

    return upcoming.results.map(result => MovieMapper.fromMovieDBResultToEntity(result));
  } catch (error) {
    console.log('🤖 ~ file: upcoming.use-case.ts:12 ~ upcomingUseCase ~ error:', error);
    throw Error('Error fetching movies - moviesUpcomingUseCase');
  }
};
