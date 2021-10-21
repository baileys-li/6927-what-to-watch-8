import { AuthorizationStatus, UserActionType } from '../../const';

type UserState = {
  status: AuthorizationStatus
};

type UserAction = {
  type: string;
}

const InitialState: UserState = {
  status: AuthorizationStatus.Unknown,
};

function userReducer(state = InitialState, action: UserAction): UserState {
  switch (action.type) {
    case UserActionType.Login:
      return { status: AuthorizationStatus.Auth };
    case UserActionType.Logout:
      return { status: AuthorizationStatus.NoAuth };
    default:
      return state;
  }
}

export default userReducer;
