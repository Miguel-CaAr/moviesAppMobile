import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '6150dc03050aa3e3e4a2daba69ed20c1',
    language: 'es',
  },
});
