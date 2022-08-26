import countPackages from '../src/17';

describe('Count packages from a carrier', () => {
  test('Carrier does not have subordinates', () => {
    expect(countPackages(carriers, 'midu')).toStrictEqual(2);
    expect(countPackages(carriers2, 'jesuspoleo')).toStrictEqual(4);
  });
  test('Carrier has subordinates for 1 level', () => {
    expect(countPackages(carriers, 'dapelu')).toStrictEqual(9);
  });

  test('Carrier has subordinates for 2 levels', () => {
    expect(countPackages(carriers2, 'camila')).toStrictEqual(15);
  });
});

const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []],
];

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []],
];
