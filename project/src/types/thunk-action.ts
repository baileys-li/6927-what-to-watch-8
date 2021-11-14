import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import type { RootState } from '../store/reducer';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  RootState,
  AxiosInstance,
  Action
>;

export type ThunkAppDispatch = ThunkDispatch<RootState, AxiosInstance, Action>;
