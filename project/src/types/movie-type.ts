type MovieType = {
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string | Array<string>,
  rating: number,
  scoresCount: number,
  director: string,
  starring: Array<string>,
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean
}
export default MovieType;

