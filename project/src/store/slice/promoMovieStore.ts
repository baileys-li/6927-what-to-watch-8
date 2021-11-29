import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import MovieType from '../../types/movie-type';
import { getPromoMovie, getMovieByID } from '../actions/promoMovieActions';

type PromoMovieState = {
  isLoading: boolean,
  error: string | null,
  movie: MovieType | null
};

const initialState: PromoMovieState = {
  isLoading: false,
  error: null,
  movie: null,
};

const PromoMovieStore = createSlice({
  name: 'promo',
  initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<MovieType>) => { state.movie = action.payload; },
  },
  extraReducers: {
    [String(getPromoMovie.pending)]: (state) => {
      state.isLoading = true;
    },
    [String(getPromoMovie.fulfilled)]: (state, action: PayloadAction<MovieType>) => {
      state.isLoading = false;
      state.movie = action.payload;
    },

    [String(getPromoMovie.rejected)]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [String(getMovieByID.pending)]: (state) => {
      state.isLoading = true;
    },
    [String(getMovieByID.fulfilled)]: (state, action: PayloadAction<MovieType>) => {
      state.isLoading = false;
      state.movie = action.payload;
    },

    [String(getMovieByID.rejected)]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setMovie } = PromoMovieStore.actions;
export default PromoMovieStore.reducer;
