import { EndPoint, Genre } from '../../const';
import { GenresType } from '../../types/genre-type';
import MovieType, { ServerResponseMovieType } from '../../types/movie-type';
import { ThunkActionResult } from '../../types/thunk-action';
import { adaptFromSnakeToCamel } from '../../utils/adapter';

/* TypeScript Requirements */
export const enum FilmsActionsType {
  Selected = 'SET_SELECTED_MOVIE',
  List = 'SET_MOVIE_LIST',
  Filter = 'SET_FILTER',
  Genres = 'SET_GENRES',
}

export type FilmsActions =
  | ReturnType<typeof updateSelected>
  | ReturnType<typeof updateList>
  | ReturnType<typeof updateFilter>
  | ReturnType<typeof updateGenres>;

/* Simple Actions for Reducer */
export const updateSelected = (movie: MovieType) =>
  ({
    type: FilmsActionsType.Selected,
    payload: movie,
  } as const);

export const updateList = (movies: MovieType[]) =>
  ({
    type: FilmsActionsType.List,
    payload: movies,
  } as const);

export const updateFilter = (filter: string) =>
  ({
    type: FilmsActionsType.Filter,
    payload: filter,
  } as const);

export const updateGenres = (genres: GenresType) =>
  ({
    type: FilmsActionsType.Genres,
    payload: genres,
  } as const);

/* Async Actions */
export const getAllMovies =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api
      .get<ServerResponseMovieType[]>(EndPoint.Films)
      .then(({ data }) => {
        const newArray: MovieType[] = [];
        const genres: GenresType = new Set([Genre.Initial]);
        data.map((movie) => {
          genres.add(movie.genre);
          return newArray.push(adaptFromSnakeToCamel(movie));
        });

        dispatch(updateList(newArray));
        dispatch(updateGenres(genres));
      });
  };


export const getMoviesList =
  (endPoint: string): ThunkActionResult => async (dispatch, _getState, api) => {
    await api
      .get<ServerResponseMovieType[]>(endPoint)
      .then(({ data }) => {
        const newArray: MovieType[] = [];
        data.map((movie) => newArray.push(adaptFromSnakeToCamel(movie)));
        dispatch(updateList(newArray));
      });
  };

export const getMovie =
  (endPoint: string): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      await api.get<ServerResponseMovieType>(endPoint).then(({ data }) => {
        dispatch(updateSelected(adaptFromSnakeToCamel(data)));
      });
    };
