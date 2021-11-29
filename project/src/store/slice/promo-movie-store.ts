import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import MovieType from '../../types/movie-type';
import { getPromoMovie, getMovieByID, changeIsFavorite } from '../actions/promo-movie-actions';

type PromoMovieState = {
  isLoading: boolean,
  error: string | null,
  movie: MovieType | null
};

export const initialState: PromoMovieState = {
  isLoading: false,
  error: null,
  movie: null,
};

const PromoMovieStore = createSlice({
  name: 'promo',
  initialState,
  reducers: {},
  extraReducers: {
    [String(getPromoMovie.pending)]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [String(getPromoMovie.fulfilled)]: (state, action: PayloadAction<MovieType>) => {
      state.isLoading = false;
      state.error = null;
      state.movie = action.payload;
    },

    [String(getMovieByID.pending)]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [String(getMovieByID.fulfilled)]: (state, action: PayloadAction<MovieType>) => {
      state.isLoading = false;
      state.movie = action.payload;
    },

    [String(getMovieByID.rejected)]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [String(changeIsFavorite.fulfilled)]: (state, action: PayloadAction<MovieType>) => {
      state.movie = action.payload;
    },

    [String(changeIsFavorite.rejected)]: (state, action: PayloadAction<MovieType>) => {
      state.error = 'No Auth';
    },
  },
});

export default PromoMovieStore.reducer;
