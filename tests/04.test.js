import createXmasTree from '../src/04';

describe('Check valid christmas tree', () => {
  test('Valid height 0 christmas tree', () => {
    expect(createXmasTree(0)).toStrictEqual(tree0);
  });
  test('Valid height 1 christmas tree', () => {
    expect(createXmasTree(1)).toStrictEqual(tree1);
  });
  test('Valid height 2 christmas tree', () => {
    expect(createXmasTree(2)).toStrictEqual(tree2);
  });
  test('Valid height 3 christmas tree', () => {
    expect(createXmasTree(3)).toStrictEqual(tree3);
  });
  test('Valid height 5 christmas tree', () => {
    expect(createXmasTree(5)).toStrictEqual(tree5);
  });
});
const tree0 = '#\n#';
const tree1 = '*\n#\n#';
const tree2 = '_*_\n***\n_#_\n_#_';
const tree3 = '__*__\n_***_\n*****\n__#__\n__#__';
const tree5 = '____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____';
