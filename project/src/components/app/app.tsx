import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import MainPage from '../pages/main-page/main-page';
import MyList from '../pages/my-list/my-list';
import MoviePage from '../pages/movie-page/movie-page';
import Login from '../pages/login/login';
import ReviewPage from '../pages/review-page/review-page';
import Player from '../pages/player/player';
import DebugPage from '../pages/debug-page/debug-page';
import Page404 from '../pages/page404/page404';

import { AppRoute, AuthorizationStatus } from '../../const';

import '../../sass/global.scss';
import useUserData from '../../hooks/useUserData';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkAuthAction } from '../../store/actions/authorizationActions';

function App(): JSX.Element {
  const { status } = useUserData();
  const dispatch = useDispatch();
  useEffect(() => {
    status === AuthorizationStatus.Unknown && dispatch(checkAuthAction());
  }, [status, dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route
          path={AppRoute.AddReview}
          element={status === AuthorizationStatus.Auth ? <ReviewPage /> : <Login />}
        />

        <Route
          path={AppRoute.MyList}
          element={status === AuthorizationStatus.Auth ? <MyList /> : <Login />}
        />

        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.SignIn}
          element={status === AuthorizationStatus.NoAuth ? <Login /> : <MainPage />}
        />

        <Route path={AppRoute.Debug} element={<DebugPage />} />

        <Route path={AppRoute.NoMatch} element={<Page404 />} />
        <Route path={'/*'} element={<Navigate to={AppRoute.NoMatch} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
