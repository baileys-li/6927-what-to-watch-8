import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Genre } from '../../const';
import GenreType from '../../types/genre-type';
import MovieType from '../../types/movie-type';

type FilmsState = {
  selected: MovieType | null,
  list: Array<MovieType> | null;
  filter: string;
  genres: GenreType[] | null
}

const initialState: FilmsState = {
  selected: null,
  list: null,
  filter: Genre.Initial,
  genres: null,
};

const filmsStore = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<MovieType>) => { state.selected = action.payload; },
    setList: (state, action: PayloadAction<MovieType[]>) => { state.list = action.payload; },
    setFilter: (state, action: PayloadAction<string>) => { state.filter = action.payload; },
    setGenres: (state, action: PayloadAction<GenreType[]>) => { state.genres = action.payload; },
  },
});

export const { setMovie, setList, setFilter, setGenres } = filmsStore.actions;
export default filmsStore.reducer;
