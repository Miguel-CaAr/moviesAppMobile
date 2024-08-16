import { Video } from '../../core/entities/video.entity';
import { MovieDBVideo } from '../interfaces/movie-db-responses';

export class VideoMapper {
  static fromMovieDBVideoToEntity(video: MovieDBVideo): Video {
    return {
      id: video.id,
      key: video.key,
      name: video.name,
      site: video.site,
    };
  };
};