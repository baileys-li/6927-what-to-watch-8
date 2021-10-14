import { transformSnakeToCamelCase } from './utils';

export function adaptFromSnakeToCamel(snakeObject: any): any {
  return Object.fromEntries(
    Object.entries(snakeObject).map(([key, val]) => [transformSnakeToCamelCase(key), val]),
  );
}
