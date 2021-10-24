import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createAPI } from '../services/api';
import { requireAuthorization } from './actions/authorizationActions';
import { AuthorizationStatus } from '../const';

const api = createAPI(
  () => store.dispatch(requireAuthorization({ status: AuthorizationStatus.NoAuth })),
);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

export default store;
