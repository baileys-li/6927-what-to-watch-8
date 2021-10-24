import { AuthorizationStatus, EndPoint } from '../../const';
import { dropToken, saveToken } from '../../services/token';
import { ThunkActionResult } from '../../types/action';
import { AuthData } from '../../types/auth-data';
import LoginResponse from '../../types/loginResponse';
import UserState from '../../types/userState';
import { requireAuthorization, requireLogout } from './authorizationActions';

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data } = await api.get<LoginResponse>(EndPoint.Login);
    dispatch(requireAuthorization(adaptLoginResponse(data)));
  };

export const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data } = await api.post<LoginResponse>(EndPoint.Login, { email, password });
    saveToken(data.token);

    dispatch(requireAuthorization(adaptLoginResponse(data)));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(EndPoint.Logout);
    dropToken();
    dispatch(requireLogout());
  };

function adaptLoginResponse(data: LoginResponse): UserState {
  const adaptedData: any = { ...data };
  delete adaptedData.token;
  adaptedData.avatarURL = data['avatar_url'];
  delete adaptedData['avatar_url'];
  adaptedData.status = AuthorizationStatus.Auth;

  return adaptedData;
}
