import { createReducer } from '@reduxjs/toolkit';
import { Genre } from '../../const';
import { GenresType } from '../../types/genre-type';
import MovieType from '../../types/movie-type';
import { updateFilter, updateGenres, updateList, updateSelected } from '../actions/filmsActions';

type FilmsState = {
  selected: MovieType | null,
  list: Array<MovieType> | null;
  filter: string;
  genres: GenresType | null
}

const InitialState : FilmsState  = {
  selected: null,
  list: null,
  filter: Genre.Initial,
  genres: null,
};

const filmsReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(updateSelected, (state, action) => {state.selected = action.payload;})
    .addCase(updateList, (state, action) => {state.list = action.payload;})
    .addCase(updateFilter, (state, action) => {state.filter = action.payload;})
    .addCase(updateGenres, (state, action) => {state.genres = action.payload;});
});


export default filmsReducer;
