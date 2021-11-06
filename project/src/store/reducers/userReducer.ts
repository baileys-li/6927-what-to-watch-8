import { AuthorizationStatus, UserActionType } from '../../const';
import type UserState from '../../types/userState';
import { UserActions } from '../actions/authorizationActions';

const InitialState: UserState = {
  status: AuthorizationStatus.Unknown,
};

function userReducer(state = InitialState, action: UserActions): UserState {
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

