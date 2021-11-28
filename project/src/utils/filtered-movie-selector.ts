import { createSelector } from 'reselect';
import { Genre } from '../const';
import { RootState } from '../store/reducer';

const moviesSelector = (state: RootState) => state.movies;

export const filteredMovieListSelector = createSelector([moviesSelector], ({filter, list: movies}) => {
  switch (filter) {
    case Genre.Initial:
      return movies;
    default:
      return movies && movies.filter((movie) => movie.genre === filter);
  }
});
