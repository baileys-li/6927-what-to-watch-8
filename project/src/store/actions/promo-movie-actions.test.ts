import { Action } from 'redux';
import { createAPI } from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { RootState } from '../reducer';
import generateServerMovieMock from '../../mock/movie-server-mock';
import { EndPoint } from '../../const';
import { getPromoMovie } from './promo-movie-actions';

describe('Async promo movie action', () => {
  const onFakeUnathorized = jest.fn();
  const api = createAPI(onFakeUnathorized);
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    RootState,
    Action,
    ThunkDispatch<RootState, typeof api, Action>
  >(middlewares);

  it('should return array of reviews when server return 200', async () => {
    const store = mockStore();
    const fakeMovie = generateServerMovieMock();

    mockAPI.onGet(EndPoint.Promo).reply(200, fakeMovie);
    expect(store.getActions()).toEqual([]);
    const fakeServerResponse = await store.dispatch(getPromoMovie());

    const manuallyAdaptedFakeMovie: any = {
      ...fakeMovie,
      posterImage: fakeMovie['poster_image'],
      previewImage: fakeMovie['preview_image'],
      backgroundImage: fakeMovie['background_image'],
      backgroundColor: fakeMovie['background_color'],
      previewVideoLink: fakeMovie['preview_video_link'],
      scoresCount: fakeMovie['scores_count'],
      runTime: fakeMovie['run_time'],
      isFavorite: fakeMovie['is_favorite'],
      videoLink: fakeMovie['video_link'],
    };

    delete manuallyAdaptedFakeMovie['poster_image'];
    delete manuallyAdaptedFakeMovie['preview_image'];
    delete manuallyAdaptedFakeMovie['background_image'];
    delete manuallyAdaptedFakeMovie['background_color'];
    delete manuallyAdaptedFakeMovie['preview_video_link'];
    delete manuallyAdaptedFakeMovie['scores_count'];
    delete manuallyAdaptedFakeMovie['run_time'];
    delete manuallyAdaptedFakeMovie['is_favorite'];
    delete manuallyAdaptedFakeMovie['video_link'];

    expect(fakeServerResponse.payload).toEqual(manuallyAdaptedFakeMovie);
  });
});
