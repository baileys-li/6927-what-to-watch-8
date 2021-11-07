import { UserActionType } from '../../const';
import UserState from '../../types/userState';
import { AuthorizationStatus, EndPoint } from '../../const';
import { dropToken, saveToken } from '../../services/token';
import { AuthData } from '../../types/auth-data';
import LoginResponse from '../../types/loginResponse';
import { ThunkActionResult } from '../../types/thunk-action';
import { createAction } from '@reduxjs/toolkit';

export type UserActions =
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;

export const requireAuthorization = createAction<UserState>(UserActionType.Login);
export const requireLogout = createAction(UserActionType.Logout);

/* Async Actions */
export const checkAuthAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api.get<LoginResponse>(EndPoint.Login).then((response) => {
      response.data && dispatch(requireAuthorization(adaptLoginResponse(response.data)));
    });
  };

export const loginAction =
  ({ login: email, password }: AuthData): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      const { data } = await api.post<LoginResponse>(EndPoint.Login, {
        email,
        password,
      });
      saveToken(data.token);

      dispatch(requireAuthorization(adaptLoginResponse(data)));
    };

export const logoutAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    api.delete(EndPoint.Logout);
    dropToken();
    dispatch(requireLogout());
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
