import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import useTypedSelector from '../../hooks/useTypedSelector';

type PrivateRouteProps = RouteProps;

function PrivateRoute({
  exact,
  path,
  component,
  children,
}: PrivateRouteProps): JSX.Element {
  const { user } = useTypedSelector((state) => state);

  const authorizationStatus = user.status;

  return (
    <Route exact={exact} path={path} component={component}>
      {authorizationStatus === AuthorizationStatus.Auth ? (
        children
      ) : (
        <Redirect to={AppRoute.SignIn} />
      )}
    </Route>
  );
}

export default PrivateRoute;
