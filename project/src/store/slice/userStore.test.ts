import faker from 'faker';
import { AuthorizationStatus } from '../../const';
import reducer, { initialState } from './userStore';

describe('Reducer: user', () => {
  it('without any parameters should return initial state', () => {
    expect(reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(
      initialState,
    );
  });
  it('should simulate authentication', () => {
    const payload = {
      id: faker.datatype.number(200),
      email: faker.internet.email(),
      name: faker.name.firstName,
      avatarURL: faker.internet.avatar,
      status: AuthorizationStatus.Auth,
    };
    expect(
      reducer(undefined, {
        type: 'user/authorization',
        payload,
      }),
    ).toEqual(payload);
  });

  it('should simulate logout', () => {
    expect(
      reducer(undefined, {
        type: 'user/logout',
      }),
    ).toEqual({
      status: AuthorizationStatus.NoAuth,
    });
  });

  it('should simulate error', () => {
    const error = 'Some Error message';
    expect(
      reducer(undefined, {
        type: 'user/setError',
        payload: error,
      }),
    ).toEqual({
      status: AuthorizationStatus.Unknown,
      error,
    });
  });
});
