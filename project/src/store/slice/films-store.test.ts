
import generateMockMovie from '../../mock/movie-mock';
import reducer, { initialState } from './films-store';


describe('Reducer: movie list', () => {
  it('without any parameters should return initial state', () => {
    expect(reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(
      initialState,
    );
  });

  it('should simulate update list', () => {

    const payload = [generateMockMovie(), generateMockMovie()];
    expect(
      reducer(undefined, {
        type: 'films/setList',
        payload,
      }),
    ).toEqual({...initialState, list: payload });
  });

  it('should simulate update genres', () => {

    const payload = ['fff', 'foo', 'barr'];
    expect(
      reducer(undefined, {
        type: 'films/setGenres',
        payload,
      }),
    ).toEqual({...initialState, genres: payload });
  });

  it('should simulate update filter', () => {

    const payload = 'Lorem';
    expect(
      reducer(undefined, {
        type: 'films/setFilter',
        payload,
      }),
    ).toEqual({...initialState, filter: payload });
  });

});
