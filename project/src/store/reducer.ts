import { combineReducers } from 'redux';
import breadcrumbsReducer from './slice/breadcrumbs-store';
import filmsReducer from './slice/films-store';
import userReducer from './slice/user-store';
import reviewsReducer  from './slice/reviews-reducer';
import promoMovieReducer from './slice/promo-movie-store';

const rootReducer = combineReducers({
  user: userReducer,
  movies: filmsReducer,
  breadcrumbs: breadcrumbsReducer,
  reviews: reviewsReducer,
  promo: promoMovieReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
