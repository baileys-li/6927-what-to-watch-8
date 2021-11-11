import UserState from '../../types/userState';
import { AuthorizationStatus, EndPoint } from '../../const';
import { dropToken, saveToken } from '../../services/token';
import { AuthData } from '../../types/auth-data';
import LoginResponse from '../../types/loginResponse';
import { ThunkActionResult } from '../../types/thunk-action';
import { authorization, logout, setError } from '../slice/userStore';

/* Async Actions */
export const checkAuthAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api.get<LoginResponse>(EndPoint.Login).then((response) => {
      response.data &&
        dispatch(authorization(adaptLoginResponse(response.data)));
    });
  };

export const loginAction =
  (credentials: AuthData): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      await api
        .post<LoginResponse>(EndPoint.Login, credentials)
        .then(({ data }) => {
          saveToken(data.token);

          dispatch(authorization(adaptLoginResponse(data)));
        })
        .catch((_error) =>
          dispatch(
            setError(
              'We can’t recognize this email and password combination. Please try again.',
            ),
          ),
        );
    };

export const logoutAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    api.delete(EndPoint.Logout);
    dropToken();
    dispatch(logout());
  };

/* Utils */

function adaptLoginResponse(data: LoginResponse): UserState {
  const adaptedData: any = {
    ...data,
    avatarURL: data['avatar_url'],
    status: AuthorizationStatus.Auth,
  };
  delete adaptedData.token;
  delete adaptedData['avatar_url'];

  return adaptedData;
}
