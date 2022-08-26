import contains from '../src/07';

describe('Check if the product is in the store', () => {
  test('The product is found', () => {
    expect(contains(almacen, 'camiseta')).toBeTruthy();
    expect(contains(almacen, 'coca-cola')).toBeTruthy();
    expect(contains(almacen, 'sprite')).toBeTruthy();
    expect(contains(otroAlmacen, 'cd-rom')).toBeTruthy();
    expect(contains(otroAlmacen, 'mando')).toBeTruthy();
    expect(contains(otroAlmacen, 'disquette')).toBeTruthy();
  });
  test('Product not found', () => {
    expect(contains(almacen, 'camiset')).toBeFalsy();
    expect(contains(almacen, 'coca cola')).toBeFalsy();
    expect(contains(almacen, 'gameboy')).toBeFalsy();
    expect(contains(otroAlmacen, 'gameboy')).toBeFalsy();
    expect(contains(otroAlmacen, 'game-boy')).toBeFalsy();
    expect(contains(otroAlmacen, 'disQuette')).toBeFalsy();
  });
});

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite',
    },
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta',
    },
  },
};

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando',
    },
  },
};
