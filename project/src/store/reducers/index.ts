import { combineReducers } from 'redux';
import breadcrumbsReducer from './breadcrumbsReducer';
import filmsReducer from './filmsReducer';
import userReducer from './userReducer';

const rootReducers = combineReducers({
  user: userReducer,
  movies: filmsReducer,
  breadcrumbs: breadcrumbsReducer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>
