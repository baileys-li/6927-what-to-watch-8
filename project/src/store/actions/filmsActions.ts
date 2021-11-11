import { createAction } from '@reduxjs/toolkit';
import { EndPoint, Genre } from '../../const';
import GenreType from '../../types/genre-type';
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
export const updateSelected = createAction<MovieType>(FilmsActionsType.Selected);
export const updateList = createAction<MovieType[]>(FilmsActionsType.List);
export const updateFilter = createAction<string>(FilmsActionsType.Filter);
export const updateGenres = createAction<GenreType[]>(FilmsActionsType.Genres);


/* Async Actions */
export const getAllMovies =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api
      .get<ServerResponseMovieType[]>(EndPoint.Films)
      .then(({ data }) => {
        const newArray: MovieType[] = [];
        const genres: Set<GenreType> = new Set([Genre.Initial]);
        data.map((movie) => {
          genres.add(movie.genre);
          return newArray.push(adaptFromSnakeToCamel(movie));
        });

        dispatch(updateList(newArray));
        dispatch(updateGenres(Array.from(genres)));
      });
  };

export const getSimilarMoviesList = (id: number | string): ThunkActionResult => getMoviesList(`${EndPoint.Films}/${id}/similar`);

export const getFavorites = (): ThunkActionResult => getMoviesList(EndPoint.Favorite);


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


export const getPromoMovie = (): ThunkActionResult => getMovie(EndPoint.Promo);
export const getMovieByID = (id: number | string): ThunkActionResult => getMovie(`${EndPoint.Films}/${id}`);


export const getMovie =
  (endPoint: string): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      await api.get<ServerResponseMovieType>(endPoint).then(({ data }) => {
        dispatch(updateSelected(adaptFromSnakeToCamel(data)));
      });
    };


export const changeIsFavorite =
    (id: number, status: number): ThunkActionResult =>
      async (dispatch, _getState, api) => {
        await api.post<ServerResponseMovieType>(`${EndPoint.Favorite}/${id}/${status}`).then(({ data }) => {
          dispatch(updateSelected(adaptFromSnakeToCamel(data)));
        });
      };
