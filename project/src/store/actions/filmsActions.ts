import { EndPoint, Genre } from '../../const';
import GenreType from '../../types/genre-type';
import MovieType, { ServerResponseMovieType } from '../../types/movie-type';
import { ThunkActionResult } from '../../types/thunk-action';
import { adaptFromSnakeToCamel } from '../../utils/adapter';

import { setList, setGenres, setMovie } from '../slice/filmsStore';

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

        dispatch(setList(newArray));
        dispatch(setGenres(Array.from(genres)));
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
        dispatch(setList(newArray));
      });
  };


export const getPromoMovie = (): ThunkActionResult => getMovie(EndPoint.Promo);
export const getMovieByID = (id: number | string): ThunkActionResult => getMovie(`${EndPoint.Films}/${id}`);


export const getMovie =
  (endPoint: string): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      await api.get<ServerResponseMovieType>(endPoint).then(({ data }) => {
        dispatch(setMovie(adaptFromSnakeToCamel(data)));
      });
    };


export const changeIsFavorite =
    (id: number, status: number): ThunkActionResult =>
      async (dispatch, _getState, api) => {
        await api.post<ServerResponseMovieType>(`${EndPoint.Favorite}/${id}/${status}`).then(({ data }) => {
          dispatch(setMovie(adaptFromSnakeToCamel(data)));
        });
      };
