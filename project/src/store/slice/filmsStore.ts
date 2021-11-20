import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Genre } from '../../const';
import GenreType from '../../types/genre-type';
import MovieType from '../../types/movie-type';

type FilmsState = {
  list: Array<MovieType> | null;
  filter: string;
  genres: GenreType[] | null
}

const initialState: FilmsState = {
  list: null,
  filter: Genre.Initial,
  genres: null,
};

const filmsStore = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<MovieType[]>) => { state.list = action.payload; },
    setFilter: (state, action: PayloadAction<string>) => { state.filter = action.payload; },
    setGenres: (state, action: PayloadAction<GenreType[]>) => { state.genres = action.payload; },
  },
});

export const { setList, setFilter, setGenres } = filmsStore.actions;
export default filmsStore.reducer;
