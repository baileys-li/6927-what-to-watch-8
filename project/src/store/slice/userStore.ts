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
    authorization: (_state, action: PayloadAction<UserState>) => action.payload,
    logout: (state) => state = { status: AuthorizationStatus.NoAuth },
  },
});

export const { authorization, logout } = userSlice.actions;
export default userSlice.reducer;
