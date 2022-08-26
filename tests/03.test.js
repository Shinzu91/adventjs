import isValid from '../src/03';

describe('Check valid letters', () => {
  test('Valid letter with valid opening and closing parenthesis', () => {
    expect(isValid('bici coche (balón) bici coche peluche')).toBeTruthy;
    expect(isValid('(muñeca) consola bici')).toBeTruthy;
  });
  test('Invalid letter with opening parenthesis', () => {
    expect(isValid('bici coche (balón bici coche')).toBeFalsy;
  });
  test('Invalid letter with invalid opening clause', () => {
    expect(isValid('(peluche {) bici')).toBeFalsy;
  });
  test('Invalid letter with empty parenthesis content', () => {
    expect(isValid('() bici')).toBeFalsy;
  });
});
