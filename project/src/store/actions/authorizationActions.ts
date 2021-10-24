import { AuthorizationStatus, UserActionType } from '../../const';

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: UserActionType.Login,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: UserActionType.Logout,
} as const);
