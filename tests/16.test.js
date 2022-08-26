import decodeNumbers from '../src/16';

describe('Decode numbers', () => {
  test('Numbers can be decoded', () => {
    expect(decodeNumbers('...')).toStrictEqual(3);
    expect(decodeNumbers('.,')).toStrictEqual(4);
    expect(decodeNumbers(',.')).toStrictEqual(6);
    expect(decodeNumbers(',...')).toStrictEqual(8);
    expect(decodeNumbers('.........!')).toStrictEqual(107);
    expect(decodeNumbers('.;')).toStrictEqual(49);
    expect(decodeNumbers('..,')).toStrictEqual(5);
    expect(decodeNumbers('.;!')).toStrictEqual(49);
    expect(decodeNumbers('!!!')).toStrictEqual(300);
    expect(decodeNumbers(';!')).toStrictEqual(50);
  });
  test('Not a number encoded', () => {
    expect(decodeNumbers(';.W')).toStrictEqual(NaN);
    expect(decodeNumbers('')).toStrictEqual(0);
  });
});
