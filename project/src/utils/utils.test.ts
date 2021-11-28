import {
  normalizeTextToID,
  normalizeDateTime,
  formatRunTime,
  formatTime,
  transformSnakeToCamelCase
} from './utils';

describe('Function: normalizeTextToID', () => {
  it('should transform "Foo Bar" to "foo_bar"', () => {
    const stringWithSpace = 'Foo Bar';
    expect(normalizeTextToID(stringWithSpace)).toBe('foo_bar');
  });
  it('should transform "Lorem" to "lorem"', () => {
    const stringWithUppercase = 'Lorem';
    expect(normalizeTextToID(stringWithUppercase)).toBe('lorem');
  });
  it('should return the same value', () => {
    const validString = 'correct_id';
    expect(normalizeTextToID(validString)).toBe(validString);
  });
});


describe('Function: normalizeDateTime', () => {
  it('should transform typical date string to easy read format', () => {
    const typicalDateFromServer = '2021-10-29T14:35:14.031Z';
    expect(normalizeDateTime(typicalDateFromServer)).toBe('October 29, 2021');
  });
  it('should format another valid value', () => {
    const validString = '12/10/2018';
    expect(normalizeDateTime(validString)).toBe('December 10, 2018');
  });
  it('should return invalid message', () => {
    const wrongString = 'Not a date';
    expect(normalizeDateTime(wrongString)).toBe('Invalid Date');
  });
});

describe('Function: formatRunTime', () => {
  it('should format minutes to easy-to-read string', () => {
    const minutes = 91;
    expect(formatRunTime(minutes)).toBe('1h 31m');
  });
  it('should only add "m" if value is less than 60', () => {
    const minutes = 55;
    expect(formatRunTime(minutes)).toBe('55m');
  });

  it('should transform 60 to 1h', () => {
    const oneHour = 60;
    expect(formatRunTime(oneHour)).toBe('1h');
  });
});

describe('Function: formatTime', () => {
  it('should format to "mm:ss"', () => {
    const greaterThanMinuteValue = 64;
    expect(formatTime(greaterThanMinuteValue)).toBe('01:04');
  });
  it('should format to "hh:mm:ss"', () => {
    const greaterThanHourValue = 3875;
    expect(formatTime(greaterThanHourValue)).toBe('01:04:35');
  });

  it('should transform to "00:ss"', () => {
    const lessThanMinuteValue = 2;
    expect(formatTime(lessThanMinuteValue)).toBe('00:02');
  });
});

describe('Function: transformSnakeToCamelCase', () => {
  it('should transform snake_case string to camelCase', () => {
    const snakeCase = 'string_in_snake_case';
    expect(transformSnakeToCamelCase(snakeCase)).toBe('stringInSnakeCase');
  });

  it('should return the same value', () => {
    const camelCase = 'alreadyValidString';
    expect(transformSnakeToCamelCase(camelCase)).toBe(camelCase);
  });

  it('should return the same value [one word]', () => {
    const oneWord = 'bar';
    expect(transformSnakeToCamelCase(oneWord)).toBe(oneWord);
  });
});
