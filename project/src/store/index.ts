import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createAPI } from '../services/api';
import { requireLogout } from './actions/authorizationActions';

const api = createAPI(
  () => store.dispatch(requireLogout()),
);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

export default store;
