import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance, AxiosError } from 'axios';
import { EndPoint } from '../../const';
import MovieType, { ServerResponseMovieType } from '../../types/movie-type';
import { adaptFromSnakeToCamel } from '../../utils/adapter';

export const getPromoMovie = createAsyncThunk<
  MovieType,
  void,
  { extra: AxiosInstance }
>('promo/getPromo', async (_, { extra, rejectWithValue }) =>
  getMovie(EndPoint.Promo, extra, rejectWithValue),
);

export const getMovieByID = createAsyncThunk<
  MovieType,
  number | string,
  { extra: AxiosInstance }
>('promo/getByID', async (id, { extra, rejectWithValue }) =>
  getMovie(`${EndPoint.Films}/${id}`, extra, rejectWithValue),
);

async function getMovie(endPoint: string, api: AxiosInstance, reject: any) {
  const result = await api
    .get(endPoint)
    .then(({ data }) => data)
    .catch((error: AxiosError) => error);

  if ((result as AxiosError).isAxiosError) {
    return reject((result as AxiosError).response?.statusText);
  }
  return adaptFromSnakeToCamel(result);
}

export type ChangeFavoriteBody = {
  id: number;
  status: number;
};

export const changeIsFavorite = createAsyncThunk<
  MovieType,
  ChangeFavoriteBody,
  { extra: AxiosInstance }
>(
  'promo/changeFavorite',
  async ({ id, status }, { extra, rejectWithValue }) => {
    const result = await extra
      .post<ServerResponseMovieType>(`${EndPoint.Favorite}/${id}/${status}`)
      .then(({ data }) => adaptFromSnakeToCamel(data))
      .catch((error: AxiosError) => error);

    if ((result as AxiosError).isAxiosError) {
      return rejectWithValue(true);
    }
    return result;
  },
);
