import { AuthorizationStatus, UserActionType } from '../../const';
import { Actions } from '../../types/action';
import type UserState from '../../types/userState';

const InitialState: UserState = {
  status: AuthorizationStatus.Unknown,
};

function userReducer(state = InitialState, action: Actions): UserState {
  switch (action.type) {
    case UserActionType.Login:
      return action.payload;
    case UserActionType.Logout:
      return { status: AuthorizationStatus.NoAuth };
    default:
      return state;
  }
}

export default userReducer;

