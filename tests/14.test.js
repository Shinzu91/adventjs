import missingReindeer from '../src/14';

describe('Find the missing reindeer', () => {
  test('The reindeer is lost', () => {
    expect(missingReindeer([0, 2, 3])).toStrictEqual(1);
    expect(missingReindeer([5, 6, 1, 2, 3, 7, 0])).toStrictEqual(4);
    expect(missingReindeer([3, 0, 1])).toStrictEqual(2);
    expect(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])).toStrictEqual(8);
  });
  test('Reindeer lost is the next', () => {
    expect(missingReindeer([0, 1])).toStrictEqual(2);
    expect(missingReindeer([0])).toStrictEqual(1);
  });
});
