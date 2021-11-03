import { Genre } from '../../const';
import MovieType from '../../types/movie-type';

/* TypeScript Requirements */
export const enum FilmsActionsType {
  Selected = 'SET_SELECTED_MOVIE',
  List = 'SET_MOVIE_LIST',
  Filter = 'SET_FILTER'
}

export type FilmsActions =
  | ReturnType<typeof updateSelected>
  | ReturnType<typeof updateList>
  | ReturnType<typeof updateFilter>;

/* Simple Actions for Reducer */
export const updateSelected = (movie: MovieType) => ({
  type: FilmsActionsType.Selected,
  payload: movie,
} as const);

export const updateList = (movies: Array<MovieType>) => ({
  type: FilmsActionsType.List,
  payload: movies,
} as const);

export const updateFilter = (filter: Genre) => ({
  type: FilmsActionsType.Filter,
  payload: filter,
} as const);
