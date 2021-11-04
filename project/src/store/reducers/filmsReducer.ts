import { Genre } from '../../const';
import MovieType from '../../types/movie-type';
import { FilmsActions, FilmsActionsType } from '../actions/filmsActions';

type FilmsState = {
  selected: MovieType | null,
  list: Array<MovieType> | null;
  filter: Genre;
  loadingSelected: boolean;
  loadingList: boolean;
}

const InitialState = {
  selected: null,
  list: null,
  filter: Genre.all,
  loadingSelected: true,
  loadingList: true,
};

function filmsReducer(state: FilmsState = InitialState, action: FilmsActions) : FilmsState {
  switch (action.type) {
    case FilmsActionsType.Selected:
      return {...state, selected: action.payload, loadingSelected: false};

    case FilmsActionsType.List:
      return {...state, list: action.payload, loadingList: false};

    case FilmsActionsType.Filter:
      return {...state, filter: action.payload};

    default:
      return state;
  }
}

export default filmsReducer;
