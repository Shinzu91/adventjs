import canCarry from '../src/21';

describe('Check if can carry al the presents', () => {
  test('Can carry all the presents', () => {
    expect(
      canCarry(3, [
        [1, 1, 5],
        [2, 2, 10],
      ]),
    ).toBeTruthy;
    expect(
      canCarry(3, [
        [2, 1, 5],
        [3, 5, 7],
      ]),
    ).toBeTruthy;
  });
  test("Can't carry", () => {
    expect(
      canCarry(4, [
        [2, 3, 8],
        [2, 5, 7],
      ]),
    ).toBeFalsy;
    expect(
      canCarry(4, [
        [2, 5, 8],
        [3, 6, 10],
      ]),
    ).toBeFalsy;
    expect(canCarry(1, [[2, 3, 8]])).toBeFalsy;
    expect(
      canCarry(2, [
        [1, 2, 4],
        [2, 3, 8],
      ]),
    ).toBeFalsy;
  });
});
