import listGifts from '../src/02';

const list = 'bici coche balón _playstation bici coche  peluche';

test('Print gifts without underscore', () => {
  expect(listGifts(list)).toStrictEqual({
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1,
  });
});
