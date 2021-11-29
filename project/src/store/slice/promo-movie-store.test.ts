import generateMockMovie from '../../mock/movie-mock';
import { getMovieByID, getPromoMovie } from '../actions/promo-movie-actions';
import reducer, { initialState } from './promo-movie-store';

describe('Reducer: promo movie', () => {
  it('without any parameters should return initial state', () => {
    expect(reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(
      initialState,
    );
  });

  it('should simulate loading', () => {
    const payload = generateMockMovie();
    expect(
      reducer(undefined, {
        type: String(getPromoMovie.pending),
        payload,
      }),
    ).toEqual({...initialState, isLoading: true });
  });
  it('should simulate loaded movie', () => {
    const payload = generateMockMovie();
    expect(
      reducer(undefined, {
        type: String(getPromoMovie.fulfilled),
        payload,
      }),
    ).toEqual({...initialState, movie: payload });
  });


  it('should simulate error', () => {
    const payload = 'Some Error';
    expect(
      reducer(undefined, {
        type: String(getMovieByID.rejected),
        payload,
      }),
    ).toEqual({...initialState, error: payload });
  });

});
