import rootReducer from './reducer';
import { createAPI } from '../services/api';
import { logout } from './slice/user-store';
import { configureStore } from '@reduxjs/toolkit';

const api = createAPI(
  () => store.dispatch(logout()),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export default store;
