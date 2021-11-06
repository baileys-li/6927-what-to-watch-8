import { combineReducers } from 'redux';
import filmsReducer from './filmsReducer';
import userReducer from './userReducer';

const rootReducers = combineReducers({
  user: userReducer,
  movies: filmsReducer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>
