import generateMockReview from '../../mock/review-mock';
import { getReviews, publishReview } from '../actions/reviews-actions';
import reducer, { initialState } from './reviews-reducer';

describe('Reducer: reviews', () => {
  it('without any parameters should return initial state', () => {
    expect(reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(
      initialState,
    );
  });

  it('should simulate published new review', () => {
    expect(
      reducer(undefined, {
        type: String(publishReview.fulfilled),
      }),
    ).toEqual({...initialState, isSuccess: true });
  });
  it('should simulate loaded reviews', () => {
    const payload = [generateMockReview(), generateMockReview()];
    expect(
      reducer(undefined, {
        type: String(getReviews.fulfilled),
        payload,
      }),
    ).toEqual({...initialState, list: payload });
  });

  it('should simulate pending new review', () => {
    const payload = 'Fake error';
    expect(
      reducer(undefined, {
        type: String(publishReview.pending),
        payload,
      }),
    ).toEqual({...initialState, isLoading: true });
  });

  it('should simulate rejected new reviews', () => {
    const payload = 'Fake error';
    expect(
      reducer(undefined, {
        type: String(publishReview.rejected),
        payload,
      }),
    ).toEqual({...initialState, error: payload });
  });
});
