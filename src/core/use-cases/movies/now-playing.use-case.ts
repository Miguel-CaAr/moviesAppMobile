import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { NowPlayingResponse } from '../../../infrastructure/interfaces/movie-db-responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

    return nowPlaying.results.map(result => MovieMapper.fromMovieDBResultToEntity(result));
  } catch (error) {
    console.log('🤖 ~ file: now-playing.use-case.ts:12 ~ moviesNowPlayingUseCase ~ error:', error);
    throw Error('Error fetching movies - moviesNowPlayingUseCase');
  }
};
