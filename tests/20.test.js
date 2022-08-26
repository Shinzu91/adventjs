import pangram from '../src/20';

describe('Pangram: check if a text contains all letters from abecedary', () => {
  test('Found all letters', () => {
    expect(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')).toBeTruthy;
    expect(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')).toBeTruthy;
  });
  test('Not found some letters', () => {
    expect(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')).toBeFalsy;
    expect(pangram('De la a a la z, nos faltan letras')).toBeFalsy;
  });
});
