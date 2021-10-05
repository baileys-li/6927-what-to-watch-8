import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';

import MainPage from '../pages/main-page/main-page';
import MyList from '../pages/my-list/my-list';
import MoviePage from '../pages/movie-page/movie-page';
import Login from '../pages/login/login';
import ReviewPage from '../pages/review-page/review-page';
import Player from '../pages/player/player';
import DebugPage from '../pages/debug-page/debug-page';
import Page404 from '../pages/page404/page404';

import { AppRoute, AuthorizationStatus } from '../../const';

import type SmallFilmCardType from '../../types/small-fim-card-type';
import type MovieType from '../../types/movie-type';

import '../../sass/global.scss';

type AppProps = {
  movies: Array<SmallFilmCardType>;
  genres: Array<string>;
  promo: MovieType;
};

function App({ movies, genres, promo }: AppProps): JSX.Element {
  const CATALOG = {
    list: movies,
    genres: genres,
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage catalog={CATALOG} promo={promo} />
        </Route>

        <Route exact path={AppRoute.Film}>
          <MoviePage list={movies.slice(0, 4)} promo={promo} />
        </Route>

        <Route path={AppRoute.AddReview}>
          <ReviewPage promo={promo} />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.MyList}
          authorizationStatus={AuthorizationStatus.Auth}
        >
          <MyList list={movies.slice(0, 9)} />
        </PrivateRoute>

        <Route path={AppRoute.Player} component={Player} />
        <Route path={AppRoute.SignIn} component={Login} />

        <Route path={AppRoute.Debug} component={DebugPage} />

        <Route path={AppRoute.NoMatch} component={Page404} />
        <Route>
          <Redirect to={AppRoute.NoMatch} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
