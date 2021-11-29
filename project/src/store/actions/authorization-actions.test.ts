import { Action } from 'redux';
import { createAPI } from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AuthorizationStatus, EndPoint } from '../../const';
import { checkAuthAction, loginAction } from './authorization-actions';
import { authorization } from '../slice/user-store';
import { AUTH_TOKEN_KEY_NAME } from '../../services/token';
import { RootState } from '../reducer';
import generateFakeCredentials from '../../mock/credentials';
import generateFakeLoginResponse from '../../mock/login-response';

describe('Async authorization actions', () => {
  const onFakeUnathorized = jest.fn();
  const api = createAPI(onFakeUnathorized);
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    RootState,
    Action,
    ThunkDispatch<RootState, typeof api, Action>
  >(middlewares);

  it('should authorization is "auth" when server return 200', async () => {
    const store = mockStore();
    const fakeResponse = generateFakeLoginResponse();
    mockAPI.onGet(EndPoint.Login).reply(200, fakeResponse);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      authorization({
        id: fakeResponse.id,
        email: fakeResponse.email,
        name: fakeResponse.name,
        avatarURL: fakeResponse.avatar_url,
        status: AuthorizationStatus.Auth,
      }),
    ]);
  });

  it('should login with correct credentials', async () => {
    const fakeUser = generateFakeCredentials();
    const fakeResponseUser = {...generateFakeLoginResponse(), email: fakeUser.email};

    mockAPI.onPost(EndPoint.Login).reply(200, fakeResponseUser);

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();
    await store.dispatch(loginAction(fakeUser));

    expect(store.getActions()).toEqual(
      [authorization({
        id: fakeResponseUser.id,
        email: fakeUser.email,
        name: fakeResponseUser.name,
        avatarURL: fakeResponseUser.avatar_url,
        status: AuthorizationStatus.Auth,
      })],
    );

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME, 'secret');
  });
});
