import shouldBuyFidelity from '../src/11';

describe('Check if is better to buy fidelity or buy tickets', () => {
  test('Buy tickets without fidelity', () => {
    expect(shouldBuyFidelity(1)).toBeFalsy();
    expect(shouldBuyFidelity(10)).toBeFalsy();
    expect(shouldBuyFidelity(20)).toBeFalsy();
  });
  test('Buy tickets with fidelity', () => {
    expect(shouldBuyFidelity(30)).toBeTruthy();
    expect(shouldBuyFidelity(100)).toBeTruthy();
    expect(shouldBuyFidelity(200)).toBeTruthy();
  });
});
