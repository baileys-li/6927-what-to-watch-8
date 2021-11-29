import { EndPoint, Genre } from '../../const';
import GenreType from '../../types/genre-type';
import MovieType, { ServerResponseMovieType } from '../../types/movie-type';
import { ThunkActionResult } from '../../types/thunk-action';
import { adaptFromSnakeToCamel } from '../../utils/adapter';

import { setList, setGenres } from '../slice/films-store';

/* Async Actions */
export const getAllMovies =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api
      .get<ServerResponseMovieType[]>(EndPoint.Films)
      .then(({ data }) => {
        const movies: MovieType[] = [];
        const genres: Set<GenreType> = new Set([Genre.Initial]);
        data.map((movie) => {
          genres.add(movie.genre);
          return movies.push(adaptFromSnakeToCamel(movie));
        });

        dispatch(setList(movies));
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
        const movies: MovieType[] = [];
        data.map((movie) => movies.push(adaptFromSnakeToCamel(movie)));
        dispatch(setList(movies));
      }).catch((error) => {
        dispatch(setList([]));
      });
  };


