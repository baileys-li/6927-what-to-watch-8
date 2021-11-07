import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';

import MainPage from '../pages/main-page/main-page';
import MyList from '../pages/my-list/my-list';
import MoviePage from '../pages/movie-page/movie-page';
import Login from '../pages/login/login';
import ReviewPage from '../pages/review-page/review-page';
import Player from '../pages/player/player';
import DebugPage from '../pages/debug-page/debug-page';
import Page404 from '../pages/page404/page404';

import { AppRoute } from '../../const';

import '../../sass/global.scss';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route path={AppRoute.AddReview} element={<ReviewPage />} />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.SignIn} element={<Login />} />

        <Route path={AppRoute.Debug} element={<DebugPage />} />

        <Route path={AppRoute.NoMatch} element={<Page404 />} />
        <Route path={'/*'} element={<Navigate to={AppRoute.NoMatch} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
