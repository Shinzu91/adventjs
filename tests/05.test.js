import daysToXmas from '../src/05';

describe('Check valid christmas days', () => {
  test('Previous christmas days', () => {
    expect(daysToXmas(date1)).toStrictEqual(24);
    expect(daysToXmas(date2)).toStrictEqual(1);
    expect(daysToXmas(date3)).toStrictEqual(1);
    expect(daysToXmas(date4)).toStrictEqual(5);
  });
  test('Same christmas days', () => {
    expect(daysToXmas(date5)).toStrictEqual(0);
  });
  test('After christmas days', () => {
    expect(daysToXmas(date6)).toStrictEqual(-1);
    expect(daysToXmas(date7)).toStrictEqual(-6);
    expect(daysToXmas(date8)).toStrictEqual(-7);
    expect(daysToXmas(date9)).toStrictEqual(-7);
  });
});

const date1 = new Date('Dec 1, 2021');
const date2 = new Date('Dec 24, 2021 00:00:01');
const date3 = new Date('Dec 24, 2021 23:59:59');
const date4 = new Date('December 20, 2021 03:24:00');
const date5 = new Date('Dec 25, 2021');
const date6 = new Date('Dec 26, 2021');
const date7 = new Date('Dec 31, 2021');
const date8 = new Date('Jan 1, 2022 00:00:01');
const date9 = new Date('Jan 1, 2022 23:59:59');
