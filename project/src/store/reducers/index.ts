import { combineReducers } from 'redux';
import breadcrumbsReducer from '../slice/breadcrumbsStore';
import filmsReducer from '../slice/filmsStore';
import userReducer from '../slice/userStore';

const rootReducers = combineReducers({
  user: userReducer,
  movies: filmsReducer,
  breadcrumbs: breadcrumbsReducer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>
