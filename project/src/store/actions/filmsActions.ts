import { AxiosInstance } from 'axios';
import { State } from 'history';
import { ThunkAction } from 'redux-thunk';
import { EndPoint, Genre } from '../../const';
import MovieType, { ServerResponseMovieType } from '../../types/movie-type';
import { adaptFromSnakeToCamel } from '../../utils/adapter';

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

export const updateList = (movies: MovieType[]) => ({
  type: FilmsActionsType.List,
  payload: movies,
} as const);

export const updateFilter = (filter: Genre) => ({
  type: FilmsActionsType.Filter,
  payload: filter,
} as const);


/* Async Actions */
type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  State,
  AxiosInstance,
  FilmsActions
>;


export const getAllMovies =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api.get<ServerResponseMovieType[]>(EndPoint.Films).then(({data}) => {
      const newArray : MovieType[] = [];
      data.map((movie) => newArray.push(adaptFromSnakeToCamel(movie)));
      dispatch(updateList(newArray));
    });
  };
