import rootReducer from './reducers';
import { createAPI } from '../services/api';
import { requireLogout } from './actions/authorizationActions';
import { configureStore } from '@reduxjs/toolkit';

const api = createAPI(
  () => store.dispatch(requireLogout()),
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
