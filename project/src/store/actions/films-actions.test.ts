import { Action } from 'redux';
import { createAPI } from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { EndPoint, Genre } from '../../const';
import { getAllMovies, getSimilarMoviesList, getFavorites } from './films-actions';
import { RootState } from '../reducer';
import generateMockMovie from '../../mock/movie-mock';
import { setGenres, setList } from '../slice/films-store';

describe('Async movies list actions test', () => {
  const onFakeUnathorized = jest.fn();
  const api = createAPI(onFakeUnathorized);
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    RootState,
    Action,
    ThunkDispatch<RootState, typeof api, Action>
  >(middlewares);

  const fakeMovies = [generateMockMovie(), generateMockMovie()];

  it('should set movies list and genres', async () => {
    const store = mockStore();
    mockAPI.onGet(EndPoint.Films).reply(200, fakeMovies);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(getAllMovies());

    expect(store.getActions()).toEqual([
      setList(fakeMovies),
      setGenres([Genre.Initial, fakeMovies[0].genre, fakeMovies[1].genre]),
    ]);
  });

  it('should get similar movies genres', async () => {
    const store = mockStore();
    mockAPI.onGet(`${EndPoint.Films}/1/similar`).reply(200, fakeMovies);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(getSimilarMoviesList(1));

    expect(store.getActions()).toEqual([
      setList(fakeMovies),
    ]);
  });

  it('should get favorites movies', async () => {
    const store = mockStore();
    mockAPI.onGet(EndPoint.Favorite).reply(200, fakeMovies);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(getFavorites());

    expect(store.getActions()).toEqual([
      setList(fakeMovies),
    ]);
  });
});
