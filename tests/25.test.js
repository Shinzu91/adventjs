import canMouseEat from '../src/25';

describe('Check if the mouse can eat', () => {
  test('The room is same size', () => {
    expect(canMouseEat('up', room)).toBeFalsy();
    expect(canMouseEat('down', room)).toBeTruthy();
    expect(canMouseEat('right', room)).toBeFalsy();
    expect(canMouseEat('left', room)).toBeFalsy();
  });
  test('The room is same size but bigger', () => {
    expect(canMouseEat('up', room2)).toBeFalsy();
    expect(canMouseEat('down', room2)).toBeFalsy();
    expect(canMouseEat('right', room2)).toBeTruthy();
    expect(canMouseEat('left', room2)).toBeFalsy();
  });
});

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*'],
];

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*'],
];
