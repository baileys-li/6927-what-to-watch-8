import { AuthorizationStatus } from '../const';
import LoginResponse from './loginResponse';

export type UserStatus = {
  status: AuthorizationStatus,
  error?: string;
}

export type UserFullState = Omit<LoginResponse, 'token' | 'avatar_url'>
  & UserStatus & {
    avatarURL: string
  }


type UserState = UserFullState | UserStatus

export default UserState;
