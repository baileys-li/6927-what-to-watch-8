type MovieBase = {
  id: number,
  name: string,
  description: string,
  rating: number,
  director: string,
  starring: string[],
  genre: string,
  released: number,
}

type MovieType = MovieBase & {
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  scoresCount: number,
  runTime: number,
  isFavorite: boolean
}
export default MovieType;

export type ServerResponseMovieType = MovieBase & {
  'poster_image': string,
  'preview_image': string,
  'background_image': string,
  'background_color': string,
  'video_link': string,
  'preview_video_link': string,
  'scores_count': number,
  'run_time': number,
  'is_favorite': boolean
}
