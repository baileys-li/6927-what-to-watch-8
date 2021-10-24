import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { RootState } from '../../store/reducers';

type PrivateRouteProps = RouteProps;

function PrivateRoute({
  exact,
  path,
  component,
  children,
}: PrivateRouteProps): JSX.Element {
  const { status } = useSelector((state: RootState) => state.user);

  return (
    <Route exact={exact} path={path} component={component}>
      {status === AuthorizationStatus.Auth ? (
        children
      ) : (
        <Redirect to={AppRoute.SignIn} />
      )}
    </Route>
  );
}

export default PrivateRoute;
