import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import useUserData from '../../hooks/useUserData';

type PrivateRouteProps = RouteProps;

function PrivateRoute({
  children,
  ...props
}: PrivateRouteProps): JSX.Element {
  const { status } = useUserData();

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
