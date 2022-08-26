import canReconfigure from '../src/23';

describe('Check if the machina can be reconfigured', () => {
  test('Machine can be reconfigured', () => {
    expect(canReconfigure(from1, to1)).toBeTruthy();
    expect(canReconfigure(from4, to4)).toBeTruthy();
  });
  test('Machine can not be reconfigured because of repetead letter not same config', () => {
    expect(canReconfigure(from2, to2)).toBeFalsy();
    expect(canReconfigure(from3, to3)).toBeFalsy();
  });
  test('Machine can not be reconfigured because of different sizes', () => {
    expect(canReconfigure(from, to)).toBeFalsy();
  });
  test('Machine can not be reconfigured because of different sizes', () => {
    expect(canReconfigure(from5, to5)).toBeFalsy();
  });
});

const from = 'AA';
const to = 'MID';

const from1 = 'BAL';
const to1 = 'LIB';
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

const from2 = 'CON';
const to2 = 'JUU';
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO (U)
*/

const from3 = 'XBOX';
const to3 = 'XXBO';
/* no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
*/

const from4 = 'XBOX';
const to4 = 'XOBX';

const from5 = 'MMM';
const to5 = 'MID';
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/
