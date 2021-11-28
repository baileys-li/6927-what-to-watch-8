import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import UserState from '../../types/userState';

export const initialState: UserState = {
  status: AuthorizationStatus.Unknown,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorization: (_state, action: PayloadAction<UserState>) => action.payload,
    logout: (state) => state = { status: AuthorizationStatus.NoAuth },
    setError: (state, action: PayloadAction<string | undefined>) => { state.error = action.payload; },
  },
});

export const { authorization, logout, setError } = userSlice.actions;
export default userSlice.reducer;
