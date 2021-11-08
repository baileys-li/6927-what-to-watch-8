import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import UserState from '../../types/userState';

const initialState: UserState = {
  status: AuthorizationStatus.Unknown,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    requireAuthorization: (_state, action: PayloadAction<UserState>) => action.payload,
    requireLogout: (state) => {state.status = AuthorizationStatus.NoAuth;},
  },
});

export const { requireAuthorization, requireLogout } = userSlice.actions;
export default userSlice.reducer;
