import { containsW, isNum, sortByChildren } from './code-challenge-13.js';

describe('Testing challenge 1', () => {
  it.skip('It should sort the characters by number of children', () => {
    expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
    expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
  });
});

describe('return if w', () => {
  test('It should sort the characters by number of children', () => {
    expect(containsW('hello, world')).toStrictEqual(true);
  });
});

describe('return true if nums', () => {
  test('It should sort the characters by number of children', () => {
    expect(isNum('h3llo')).toStrictEqual(true);
  });
});