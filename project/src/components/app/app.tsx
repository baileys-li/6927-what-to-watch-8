import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainPage from '../pages/main-page/main-page';
import MyList from '../pages/my-list/my-list';
import MoviePage from '../pages/movie-page/movie-page';
import Login from '../pages/login/login';
import ReviewPage from '../pages/review-page/review-page';
import Player from '../pages/player/player';
import DebugPage from '../pages/debug-page/debug-page';

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
        <Route exact path='/'>
          <MainPage catalog={CATALOG} promo={promo} />
        </Route>

        <Route path='/films'>
          <MoviePage list={movies.slice(0, 4)} promo={promo} />
        </Route>

        <Route path='/review' component={ReviewPage}>
          <ReviewPage promo={promo} />
        </Route>

        <Route path='/mylist'>
          <MyList list={movies.slice(0, 9)} />
        </Route>
        <Route path='/player' component={Player} />
        <Route path='/login' component={Login} />

        <Route path='/debug' component={DebugPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
