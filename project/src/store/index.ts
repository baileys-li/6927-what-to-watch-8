import rootReducer from './reducers';
import { createAPI } from '../services/api';
import { logout } from './slice/userStore';
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
