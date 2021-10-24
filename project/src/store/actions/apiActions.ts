import { AuthorizationStatus, EndPoint } from '../../const';
import { dropToken, saveToken, Token } from '../../services/token';
import { ThunkActionResult } from '../../types/action';
import { AuthData } from '../../types/auth-data';
import { requireAuthorization, requireLogout } from './authorizationActions';

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(EndPoint.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data: { token } } = await api.post<{ token: Token }>(EndPoint.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(EndPoint.Logout);
    dropToken();
    dispatch(requireLogout());
  };
