import { Action } from 'redux';
import { createAPI } from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { RootState } from '../reducer';
import generateMockReview from '../../mock/review-mock';
import faker from 'faker';
import { getReviews, publishReview } from './reviewsActions';

describe('Async get reviews action', () => {
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
    const fakeReviews = [];

    for (let index = 0; index < faker.datatype.number(5); index++) {
      fakeReviews.push(
        generateMockReview(),
      );
    }
    const mockMovieID = faker.datatype.number(30);
    mockAPI.onGet(`/comments/${mockMovieID}`).reply(200, fakeReviews);
    expect(store.getActions()).toEqual([]);
    const fakeServerResponse = await store.dispatch(getReviews(mockMovieID));
    expect(fakeServerResponse.payload).toEqual(fakeReviews);
  });

  it('should reject when server return 400', async () => {
    const store = mockStore();
    const mockMovieID = faker.datatype.number(30);
    mockAPI.onGet(`/comments/${mockMovieID}`).reply(400);
    expect(store.getActions()).toEqual([]);
    const fakeServerResponse = await store.dispatch(getReviews(mockMovieID));
    expect(fakeServerResponse.type).toEqual('reviews/getReviews/rejected');
  });
});


describe('Async post review action', () => {
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
    const fakeReview = generateMockReview();
    const mockMovieID = faker.datatype.number(30);
    mockAPI.onPost(`/comments/${mockMovieID}`).reply(200, [fakeReview]);
    expect(store.getActions()).toEqual([]);
    const fakeServerResponse = await store.dispatch(publishReview({id: mockMovieID, body: fakeReview}));
    expect(fakeServerResponse.payload).toEqual([fakeReview]);
  });

  it('should reject when server return 200', async () => {
    const store = mockStore();
    const fakeReview = generateMockReview();
    const mockMovieID = faker.datatype.number(30);
    mockAPI.onPost(`/comments/${mockMovieID}`).reply(400);
    expect(store.getActions()).toEqual([]);
    const fakeServerResponse = await store.dispatch(publishReview({id: mockMovieID, body: fakeReview}));
    expect(fakeServerResponse.type).toEqual('reviews/publishReviews/rejected');
  });

});
