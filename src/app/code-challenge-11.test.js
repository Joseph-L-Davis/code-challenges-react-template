import { findMax, returnTen, totalSum } from './code-challenge-11';

test('it should return the last 10 characters of a string as an array', () => {
  expect(returnTen('hello world')).toStrictEqual(['e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
  expect(returnTen('world')).toStrictEqual(['w', 'o', 'r', 'l', 'd']);
});

test('return num with highest val', () => {
  expect(findMax([[1, 3, 4, 5], [4, 5, 6], [23, 5, 5]]

  )).toStrictEqual(23);
});

test('return num with highest val', () => {
  expect(totalSum([[13, 24, 24, 2], [2, 5, 6], [2, 3]]

  )).toStrictEqual(81);
});