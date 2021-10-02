import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainPage from '../pages/main-page/main-page';
import MyList from '../pages/my-list/my-list';
import MoviePage from '../pages/movie-page/movie-page';
import Login from '../pages/login/login';
import ReviewPage from '../pages/review-page/review-page';
import Player from '../pages/player/player';

import MOVIES from '../../mock/small-cards-movies';
import GENRES from '../../mock/genres';
import PROMO from '../../mock/promo-movie';

const CATALOG = {
  list: MOVIES,
  genres: GENRES,
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage catalog={CATALOG} promo={PROMO} />
        </Route>

        <Route path='/films'>
          <MoviePage list={MOVIES.slice(0, 4)} promo={PROMO} />
        </Route>

        <Route path='/review' component={ReviewPage}>
          <ReviewPage promo={PROMO} />
        </Route>

        <Route path='/mylist'>
          <MyList list={MOVIES.slice(0, 9)} />
        </Route>
        <Route path='/player' component={Player} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
