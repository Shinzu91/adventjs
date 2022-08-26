import groupBy from '../src/09';

describe('Group by:', () => {
  test('Group by function', () => {
    expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toStrictEqual({ 6: [6.1, 6.3], 4: [4.2] });
    expect(groupBy([1397639141184, 1363223700000], (timestamp) => new Date(timestamp).getFullYear())).toStrictEqual({
      2013: [1363223700000],
      2014: [1397639141184],
    });
  });
  test('Group by property', () => {
    expect(groupBy(['one', 'two', 'three'], 'length')).toStrictEqual({ 3: ['one', 'two'], 5: ['three'] });
    expect(groupBy([{ age: 23 }, { age: 24 }], 'age')).toStrictEqual({ 23: [{ age: 23 }], 24: [{ age: 24 }] });
    expect(
      groupBy(
        [
          { title: 'JavaScript: The Good Parts', rating: 8 },
          { title: 'Aprendiendo Git', rating: 10 },
          { title: 'Clean Code', rating: 9 },
        ],
        'rating',
      ),
    ).toStrictEqual({
      8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
      9: [{ title: 'Clean Code', rating: 9 }],
      10: [{ title: 'Aprendiendo Git', rating: 10 }],
    });
  });
});
