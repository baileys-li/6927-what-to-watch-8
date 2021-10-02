type MovieType = {
  id: number,
  name: string,
  poster: string,
  preview: string,
  background: string,
  backColor: string,
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
  favorite: boolean
}
export default MovieType;

