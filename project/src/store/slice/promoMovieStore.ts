import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import MovieType from '../../types/movie-type';

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
});

export const { setMovie } = PromoMovieStore.actions;
export default PromoMovieStore.reducer;
