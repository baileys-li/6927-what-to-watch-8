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

function setMovie(state: PromoMovieState, action: PayloadAction<MovieType>) {
  state.isLoading = false;
  state.error = null;
  state.movie = action.payload;
}

function setLoading(state: PromoMovieState) {
  state.isLoading = true;
  state.error = null;
}

const PromoMovieStore = createSlice({
  name: 'promo',
  initialState,
  reducers: {},
  extraReducers: {
    [String(getPromoMovie.pending)]: setLoading,
    [String(getPromoMovie.fulfilled)]: setMovie,

    [String(getMovieByID.pending)]: setLoading,
    [String(getMovieByID.fulfilled)]: setMovie,

    [String(getMovieByID.rejected)]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [String(changeIsFavorite.fulfilled)]: setMovie,

    [String(changeIsFavorite.rejected)]: (state) => {
      state.error = 'No Auth';
    },
  },
});

export default PromoMovieStore.reducer;
