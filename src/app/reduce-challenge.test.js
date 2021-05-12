import { addPurchased, addValues, toLastNames } from './reduce-challenge.js';

it('create full names', () => {
  expect(toLastNames([{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }])).toStrictEqual(['Jane Doe', 'James Bond']);
});

it('sum the nums', () => {
  expect(addValues([2, 4, 6, 8])).toStrictEqual(20);
});

it('return amount purchased', () => {
  expect(addPurchased([{ tool: 'hammer', amount: 3 }, { tool: 'screwdriver', amount: 5 }])).toStrictEqual(8);
});