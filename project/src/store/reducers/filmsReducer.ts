import { Genre } from '../../const';
import { GenresType } from '../../types/genre-type';
import MovieType from '../../types/movie-type';
import { FilmsActions, FilmsActionsType } from '../actions/filmsActions';

type FilmsState = {
  selected: MovieType | null,
  list: Array<MovieType> | null;
  filter: string;
  genres: GenresType | null
}

const InitialState = {
  selected: null,
  list: null,
  filter: Genre.Initial,
  genres: null,
};

function filmsReducer(state: FilmsState = InitialState, action: FilmsActions) : FilmsState {
  switch (action.type) {
    case FilmsActionsType.Selected:
      return {...state, selected: action.payload};

    case FilmsActionsType.List:
      return {...state, list: action.payload};

    case FilmsActionsType.Filter:
      return {...state, filter: action.payload};
    case FilmsActionsType.Genres:
      return {...state, genres: action.payload};

    default:
      return state;
  }
}

export default filmsReducer;
