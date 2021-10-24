import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { RootState } from '../../store/reducers';

type PrivateRouteProps = RouteProps;

function PrivateRoute({
  children,
  ...props
}: PrivateRouteProps): JSX.Element {
  const { status } = useSelector((state: RootState) => state.user);

  return (
    <Route {...props}>
      {status === AuthorizationStatus.Auth ? (
        children
      ) : (
        <Redirect to={AppRoute.SignIn} />
      )}
    </Route>
  );
}

export default PrivateRoute;
