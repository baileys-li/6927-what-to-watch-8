import { UserActionType } from '../../const';
import UserState from '../../types/userState';

export const requireAuthorization = (authData: UserState) => ({
  type: UserActionType.Login,
  payload: authData,
} as const);

export const requireLogout = () => ({
  type: UserActionType.Logout,
} as const);
