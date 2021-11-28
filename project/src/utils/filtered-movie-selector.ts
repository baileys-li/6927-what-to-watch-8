import { createSelector } from 'reselect';
import { Genre } from '../const';
import { RootState } from '../store/reducer';

const moviesSelector = (state: RootState) => state.movies;

export const filteredMovieListSelector = createSelector([moviesSelector], ({filter, list}) => {
  switch (filter) {
    case Genre.Initial:
      return list;
    default:
      return list && list.filter((movie) => movie.genre === filter);
  }
});
