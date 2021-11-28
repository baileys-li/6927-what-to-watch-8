import { adaptFromSnakeToCamel } from './adapter';

describe('Function: adaptFromSnakeToCamel', () => {
  it('should transform snake_case key to camelCase', () => {
    const testObject = {
      'snake_key': null,
      alreadyValidKey: 1,
      one: 2,
    };
    expect(adaptFromSnakeToCamel(testObject)).toEqual({snakeKey: null, alreadyValidKey: 1 , one: 2});
  });
});
