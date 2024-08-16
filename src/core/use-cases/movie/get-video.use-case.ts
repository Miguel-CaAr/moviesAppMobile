import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBVideoResponse } from '../../../infrastructure/interfaces/movie-db-responses';
import { VideoMapper } from '../../../infrastructure/mappers/Video.mapper';
import { Video } from '../../entities/video.entity';

export const getMovieVideoUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<Video[]> => {
  try {
    const { results } = await fetcher.get<MovieDBVideoResponse>(`${movieId}/videos`);
    const video = results.map(VideoMapper.fromMovieDBVideoToEntity);

    return video;
  } catch (error) {
    console.log('🤖 ~ file: get-video.use-case.ts:11 ~ error:', error);
    throw new Error(`Cannot get video ${movieId}`);
  };
};