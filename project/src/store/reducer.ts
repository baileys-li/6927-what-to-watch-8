import { combineReducers } from 'redux';
import breadcrumbsReducer from './slice/breadcrumbsStore';
import filmsReducer from './slice/filmsStore';
import userReducer from './slice/userStore';

const rootReducer = combineReducers({
  user: userReducer,
  movies: filmsReducer,
  breadcrumbs: breadcrumbsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
