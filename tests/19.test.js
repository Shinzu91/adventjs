import learn from '../src/19';

describe('Get best two courses to learn for N hours', () => {
  test('Best two courses are found', () => {
    expect(learn(10, [2, 3, 8, 1, 4])).toStrictEqual([0, 2]);
    expect(learn(15, [2, 10, 4, 1])).toStrictEqual([1, 2]);
    expect(learn(25, [10, 15, 20, 5])).toStrictEqual([0, 1]);
    expect(learn(8, [8, 2, 1])).toStrictEqual([1, 2]);
    expect(learn(8, [8, 2, 1, 4, 3])).toStrictEqual([3, 4]);
  });
  test('Not found two best courses', () => {
    expect(learn(4, [10, 14, 20])).toBeNull();
    expect(learn(5, [5, 5, 5])).toBeNull();
  });
});
