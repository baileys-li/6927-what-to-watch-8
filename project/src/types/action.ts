import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { requireAuthorization, requireLogout } from '../store/actions/authorizationActions';
import { State } from './state';

export type Actions =
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
