import generateFakeLink from '../../mock/mock-link';
import LinkType from '../../types/link';
import reducer, { initialState } from './breadcrumbs-store';


describe('Reducer: breadcrumbs', () => {
  it('without any parameters should return initial state', () => {
    expect(reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(
      initialState,
    );
  });

  it('should update store', () => {

    const payload: LinkType[] = [generateFakeLink(), generateFakeLink()];
    expect(
      reducer(undefined, {
        type: 'breadcrumbs/rewriteAll',
        payload,
      }),
    ).toEqual({ list: payload });
  });

});
