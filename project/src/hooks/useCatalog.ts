import { Dispatch, SetStateAction, useState } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { Genre } from '../const';
import { RootState } from '../store/reducer';
import MovieType from '../types/movie-type';

const moviesSelector = (state: RootState) => state.movies;
const filteredMovieListSelector = createSelector([moviesSelector], ({filter, list}) => {
  switch (filter) {
    case Genre.Initial:
      return list;
    default:
      return list && list.filter((movie) => movie.genre === filter);
  }
});

function useCatalog() : [MovieType[] | null, number, Dispatch<SetStateAction<number>>] {
  const filteredList = useSelector(filteredMovieListSelector);

  const [limit, setLimit] = useState<number>(8);

  return [filteredList, limit, setLimit];
}

export default useCatalog;
