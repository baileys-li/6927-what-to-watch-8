import { combineReducers } from 'redux';
import breadcrumbsReducer from './slice/breadcrumbsStore';
import filmsReducer from './slice/filmsStore';
import userReducer from './slice/userStore';
import reviewsReducer  from './slice/reviewsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  movies: filmsReducer,
  breadcrumbs: breadcrumbsReducer,
  reviews: reviewsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
